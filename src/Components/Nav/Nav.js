/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <div>
        <p>Nav</p>
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/post/:postid'>
          <button>New Post</button>
        </Link>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);
