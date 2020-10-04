const express = require('express');
const router  = express.Router();
const { Octokit } = require('@octokit/rest');
const { v4: uuidv4 } = require('uuid');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

let getData = async (query, per_page, page) => {
  let options = {
    q: query,
    state: 'open',
    sort: 'updated',
    order: 'des',
    per_page,
    page
  };

  let res = await octokit.search.issuesAndPullRequests(options);
  let ops = res.data.items.map(async entry => {
    console.log(entry.title);
    const newEntry = JSON.parse(JSON.stringify({
      _id: uuidv4(),
      repo_id: {
        owner: entry.user.login,
        repo: entry.repository_url.slice(entry.repository_url.lastIndexOf('/') + 1,)
      },
      image: entry.user.avatar_url || entry.user.gravatar_id || 'placeholder.jpg',
      title: entry.title,
      description: entry.body,
      created_at: entry.created_at,
      updated_at: entry.updated_at,
      labels: entry.labels.map(label => {
        return {
          name: label.name,
          color: label.color
        }
      }),
    }));
    newEntry.repo = await findMore(newEntry.repo_id);
    return newEntry;
  })
  let data = await Promise.all(ops);

  return data;
};

let findMore = async (repo_id) => {
  try {
    let api_res = await octokit.repos.get({ owner: repo_id.owner, repo: repo_id.repo });
    const newRes = {
      about: api_res.data.description,
      repo_id: api_res.data.id,
      fork: api_res.data.fork,
      created_at: api_res.data.created_at,
      updated_at: api_res.data.updated_at,
      homepage: api_res.data.homepage,
      language: api_res.data.language,
      forks_count: api_res.data.forks_count,
    }
    return newRes;
  } catch (e) {
    // console.error(e);
    return {};
  }
};

router.get('/api/repo/:owner/:repo', (req, res, next) => {
  const { owner, repo } = req.params
  octokit.repos.get({
    owner,
    repo
  })
  .then(result => {
    res.status(200).json(result.data);
  })
  .catch(err => next(err));
});

router.get('/api/labels/:query/:per_page/:page?', async (req, res, next) => {
  const {query, per_page, page} = req.params;
  const data = await getData(query, per_page, page);

  res.status(200).json({ data: data })
});

router.get('/api/labels', async (req, res, next) => {
  const data = octokit.search.issuesAndPullRequests({
    q:'help-wanted'
  });

  res.status(200).json({data: (await data).data.items})
});

module.exports = router;