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
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:5555/api/auth/github", true);
  xhttp.send();
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