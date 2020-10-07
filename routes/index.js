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
    public: true,
    sort: 'created',
    order: 'desc',
    per_page,
    page
  };

  let res = await octokit.search.issuesAndPullRequests(options);
  let ops = res.data.items.map(async entry => {
    const repo_credentials = entry.repository_url.split('/');
    const newEntry = JSON.parse(JSON.stringify({
      _id: uuidv4(),
      repo_id: {
        owner: repo_credentials[repo_credentials.length - 2],
        repo: repo_credentials[repo_credentials.length - 1]
      },
      owner: {
        id: entry.user.id,
        login: entry.user.login,
        url: entry.user.html_url
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
    const repo = await findMore(newEntry.repo_id);
    if (!repo.message) { newEntry.repo = repo; }
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
      html_url: api_res.data.html_url,
      fork: api_res.data.fork,
      created_at: api_res.data.created_at,
      updated_at: api_res.data.updated_at,
      homepage: api_res.data.homepage,
      language: api_res.data.language,
      forks_count: api_res.data.forks_count,
    }
    return newRes;
  } catch (e) {
    console.error('Error finding more', repo_id, e.status, e.message);
    return { message: e.status };
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