import React from 'react';
import {connect} from 'react-redux';
import { login } from '../actions/loginActions.js';
import cookie from '../util/cookie.js';

@connect()
export default class LoginForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  }

  onClick(event) {
    event.preventDefault();
    this.onLogin();
  }

  onLogin() {
    if (this.state.name != '') {
      this.props.dispatch(login(this.state.name));
    }
  }

  onTextChange(event) {
    this.setState({
      name: event.target.value 
    });
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="login-container">
            <div class="login-form">
              <input autoFocus class="name-input" onChange={this.onTextChange.bind(this)} onKeyDown={this.onEnter.bind(this)} type="text" placeholder="Enter your name..." />
              <a href="#" class="enter-button" onClick={this.onClick.bind(this)}>Enter Chat</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
