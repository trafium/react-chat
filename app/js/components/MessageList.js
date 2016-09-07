import React from 'react';

export default class MessagesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clung: true,
      alert: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.clung) {
      this.scrollDown();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lastID != nextProps.lastID && !this.state.clung) {
      this.setState({
        alert: true 
      });
    }
  }

  onScroll(event) {
    let list = this.refs.list;
    let currentScroll = list.scrollTop;
    let maxScroll = list.scrollHeight - list.offsetHeight;
    if (currentScroll < maxScroll) {
      this.setState({
        clung: false 
      });
    } else {
      this.setState({
        clung: true,
        alert: false
      });
    }
  }

  scrollDown() {
    let list = this.refs.list;
    let maxScroll = list.scrollHeight - list.offsetHeight;
    list.scrollTop = maxScroll;
  }

  onClick(event) {
    event.preventDefault();
    this.scrollDown();
  }

  render() {
    const messages = this.props.messages.map((msg) => {
      let timestamp = msg.timestamp.substring(11, msg.timestamp.length-5);
      return (
        <li class="message">
           <span class="message-name">{msg.author}</span>
           <span class="message-timestamp">[{timestamp}]</span>: {msg.text}
        </li>
      );
    });

    return (
      <div class="messages-container">
        <div ref="list" class="messages-list" onScroll={this.onScroll.bind(this)}>
          <ul class="messages">{messages}</ul>
        </div>
        {this.state.alert && <div class="message-alert" onClick={this.onClick.bind(this)}>New Messages</div>}
      </div>

    );
  }
}
