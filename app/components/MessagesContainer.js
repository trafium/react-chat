import React from 'react';

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="messages-container">
         <ul class="messages">
            <li class="message">
               <span class="message-name">Traf</span>: Hello World
            </li>
            <li class="message">
               <span class="message-name">Traf</span>: Hello World
            </li>
            <li class="message">
               <span class="message-name">Traf</span>: Hello World
            </li>
         </ul>
      </div>
    );
  }
}
