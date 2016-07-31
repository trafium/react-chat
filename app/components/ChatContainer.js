import React from 'react';

import MessagesContainer from './MessagesContainer.js';
import UsersContainer from './UsersContainer.js';
import InputContainer from './InputContainer.js';

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
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
               <MessagesContainer />
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
               <UsersContainer />
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