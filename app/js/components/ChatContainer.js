import React from 'react';

import MessagesContainer from './MessagesContainer.js';
import UsersContainer from './UsersContainer.js';
import InputContainer from './InputContainer.js';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions.js';
import { fetchMessages } from '../actions/messagesActions.js';

@connect((store) => {
  return {
    messages: store.messages.messages,
    users: store.users.users,
    messagesFetching: store.messages.fetching,
    usersFetching: store.users.fetching
  };
})
export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getUsers() {
    this.props.dispatch(fetchUsers());
  }

  getMessages() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    return (
      <div class="chat-container">
         <div class="row">
            <div class="col-md-12">
               <div class="chat_header">CHAT ROOM v3.0</div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-8">
              <MessagesContainer
                messages={this.props.messages}
                getMessages={this.getMessages.bind(this)}
                fetching={this.props.messagesFetching}/>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <UsersContainer 
                users={this.props.users}
                getUsers={this.getUsers.bind(this)}/>
            </div>
         </div>
         <div class="row">
            <div class="col-md-12">
               <InputContainer/>
            </div>
         </div>
      </div>
    );
  }
}