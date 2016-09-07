
import React from 'react';
import ChatHeader from './ChatHeader.js';
import {connect} from 'react-redux';

import ChatBody from './ChatBody.js';
import LoginForm from './LoginForm.js';

import cookie from '../util/cookie.js';

import {login} from '../actions/loginActions.js';

import store from '../store.js';

@connect((store)=> {
  return {
    logged: store.login.logged,
  };
})
export default class Layout extends React.Component {
	componentWillMount() {
		if (cookie.get('logged')) {
			this.props.dispatch(login(cookie.get('name')));
			console.log(store.getState());
		}
	}

	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
						<div class="chat-container">
							<ChatHeader logged={this.props.logged} name="CHAT ROOM v3.0"/>
							{
								this.props.logged 
									? <ChatBody /> 
									: <LoginForm/>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}