import React from 'react';

export default class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMessages();
  }

  render() {

    let messages = this.props.messages.map((msg) => {
      return (
        <li class="message">
           <span class="message-name">{msg.name}</span>: {msg.message}
        </li>
      );
    });

    return (
      <div class="messages-container">
        <ul class="messages">{messages}</ul>
      </div>
    );
  }
}
