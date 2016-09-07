import React from 'react';

import { connect } from 'react-redux';

import { stopFetchingMessages, fetchMessages } from '../actions/messagesActions.js';

@connect((store) => {
  return {
    fetching: store.messages.fetching
  };
})
export default class MessageForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      message: '' 
    };
  }

  onTextChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onClick(event) {
    event.preventDefault();
    this.onSubmit();
  }

  onSubmit() {
    this.props.handleSubmit(this.state.message);
    console.log(this.props.fetching);
    if (!this.props.fetching) {
      this.props.dispatch(stopFetchingMessages());
      this.props.dispatch(fetchMessages());
    }
    this.setState({
      message: '' 
    });
  }

  render() {
    return (
      <div class="input-container">
         <input type="text" 
          autoFocus
          class="message-input" 
          placeholder="Сообщение..." 
          value={this.state.message}
          onKeyDown={this.onEnter.bind(this)}
          onChange={this.onTextChange.bind(this)}/>
         <a href="#" 
          class="send-button"
          onClick={this.onClick.bind(this)}>Send</a>
      </div>
    );
  }
}
