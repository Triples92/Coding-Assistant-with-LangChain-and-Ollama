import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  _handleClick = (e) => {
    e.preventDefault();
    // Call API to authenticate user
    const { onLogin } = this.props;
    onLogin(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={this._handleClick}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Signin;