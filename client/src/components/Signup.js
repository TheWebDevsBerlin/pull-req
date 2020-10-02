import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


import { logout } from '../services/auth';

class SignUp extends Component {

  state= {
    message: ''
  }

  handleLogoutGithub = e => {
    e.preventDefault();
    console.log('click');
    if(this.props.user){
      logout();
      this.props.setUser(null);
    };
  }

  componentDidUpdate(nextProps) {
    (nextProps.user)?console.log('Logged in'):console.log('Logged out!');
    console.log('update', this.state.message);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        {
            !this.props.user ? (
                <Button
                  href="http://localhost:5555/api/auth/github">
                  <GitHubIcon style={{marginRight: '1rem'}}/>
                  Login with github
                </Button>): 
                <Button
                  component="button"
                  onClick={this.handleLogoutGithub}>
                  Logout
                </Button>
            }
      </Container>
    );

  }
}

export default SignUp;