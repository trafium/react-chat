import React from 'react';

import MessageList from '../MessageList.js';

import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messagesActions.js';

@connect((store) => {
  return {
    messages: store.messages.messages,
    lastID: store.messages.lastID
  };
})
export default class MessageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    return (
      <MessageList messages={this.props.messages} lastID={this.props.lastID}/>
    );
  }
}
