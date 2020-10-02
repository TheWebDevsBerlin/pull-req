const express = require('express');
const router  = express.Router();
const { Octokit } = require('@octokit/rest');
const { uuid } = require('uuidv4');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

router.get('/api/repo/:owner/:repo', (req, res, next) => {
  const { owner, repo } = req.params
  octokit.repos.get({
    owner,
    repo
  })
  .then(result => {
    res.status(200).json({ data: result.data });
  })
  .catch(err => next(err));
});

router.get('/api/labels/:query/:per_page/:page?', async (req, res, next) => {
  const {query, per_page, page} = req.params;
  let result = await octokit.search.issuesAndPullRequests({
    q: query,
    per_page,
    page
  });
  
  const data = await result.data.items.map(item => {
      return {
        _id : uuid(),
        repo_id: {
          owner: item.user.login,
          repo: item.repository_url.slice(item.repository_url.lastIndexOf('/')+1,)
        },
        image: item.user.avatar_url || item.user.gravatar_id || 'placeholder.jpg',
        title: item.title,
        description: item.body,
        created_at: item.created_at,
        updated_at: item.updated_at,
        labels: item.labels.map(label => { 
          return {
            name: label.name,
            color: label.color
          }
        })
      }
    }
  );

  res.status(200).json({data: await data})
});

router.get('/api/labels', async (req, res, next) => {
  const data = octokit.search.issuesAndPullRequests({
    q:'help-wanted'
  });

  res.status(200).json({data: (await data).data.items})
});

module.exports = router;