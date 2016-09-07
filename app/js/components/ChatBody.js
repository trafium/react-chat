import React from 'react';

import MessageContainer from './containers/MessageContainer.js';
import UserContainer from './containers/UserContainer.js';
import MessageForm from './MessageForm.js';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions.js';
import { fetchMessages, submitMessage } from '../actions/messagesActions.js';

import axios from 'axios';

@connect((store) => {
  return {
    name: store.login.name
  };
})
export default class ChatBody extends React.Component {
  static messagesTimeout;

  constructor(props) {
    super(props);
  }

  handleSubmitMessage(text) {
    if (text.trim() != '') {
      this.props.dispatch(submitMessage(this.props.name, text));
    }
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-8">
            <MessageContainer/>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4">
            <UserContainer/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <MessageForm handleSubmit={this.handleSubmitMessage.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}