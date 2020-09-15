/** @format */

import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      search: '',
      userposts: true,
    };
  }

  // getAllPosts()
  // reset()

  render() {
    this.state.posts.map((e, i) => {
      return (
        <div>
          <p>{e.title}</p>
          <p>{e.img}</p>
          <p>{e.author.id}</p>
        </div>
      );
    });
    return (
      <div>
        <div>
          <p>Dashboard</p>
          <input search={() => this.handleSearch()} />
          <button>Search</button>
          <button>Reset</button>
          <input
            type='checkbox'
            checked={this.state.posts}
            onChange={() => this.onChange()}
          />
          <input
            type='checkbox'
            checked={this.state.posts}
            onChange={
              (() =>
                this.setState({
                  posts: !this.state.posts,
                }),
              this.getAllPosts)
            }
          />
        </div>
      </div>
    );
  }
}
