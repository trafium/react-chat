import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/loginActions.js';


import {stopFetchingMessages} from '../actions/messagesActions.js';
import {stopFetchingUsers} from '../actions/usersActions.js';

@connect()
export default class ChatHeader extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  onLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
    this.props.dispatch(stopFetchingMessages());
    this.props.dispatch(stopFetchingUsers());
  }

  render() {
    return (
      <div class="row">
         <div class="col-md-12">
            <div class="chat_header">
              {this.props.name}
              {this.props.logged && 
                <a href="#" 
                  class="logout-button"
                  onClick={this.onLogout.bind(this)}>
                  Log Out
                </a>}
            </div>
         </div>
      </div>
    );
  }
}
