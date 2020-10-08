
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Signup from './Signup';

class Login extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={ { margin: '2rem', padding: '2rem' } }>
          <Typography component="article">
            <h1>Sign up or login</h1>
            <p>Sign up and login to Pull-Req app in order to chat with ____ regarding a solution for your issue or just get to know a new friend.</p>
            <Signup user={ this.props.match.params.person } />
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);