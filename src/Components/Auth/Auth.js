/** @format */

import React, { Component } from 'react';
import { updateUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import Axios from 'axios';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = () => {
    const { username, password } = this.state;
    Axios.post('/api/auth/register', { username, password })
      .then(res => {
        this.setState({
          username: res.data,
          password: res.data,
        });
        this.props.updateUser(res.data);
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        alert('MATT! get it together');
      });
  };

  login = () => {
    const { username, password } = this.state;
    Axios.post('/api/auth/login', { username, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        alert('Matt! get it together');
      });
  };
  render() {
    return (
      <div>
        <p>Auth</p>
        <div>
          <input
            className='username-text'
            name='username'
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            className='password-text'
            password='password'
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

// const mapStateToProps = state => state;

export default connect(null, { updateUser })(Auth);
