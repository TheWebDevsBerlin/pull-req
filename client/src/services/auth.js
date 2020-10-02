import axios from 'axios';

const signup = (username, password) => {
  return axios
    .post('/api/auth/signup', { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const loginGitHub = () => {
  console.log('client auth.js')
  return axios
    .get('/api/auth/github')
    // .then(response => response.data)
    // .catch(err => err);
};

const login = (username, password) => {
  return axios
    .post('/api/auth/login', { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete('/api/auth/logout')
    .then(response => response)
    .catch(err => err);
};

export { signup, loginGitHub, login, logout };