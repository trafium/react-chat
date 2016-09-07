import React from 'react';

import UserList from '../UserList.js';

import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions.js';

@connect((store) => {
  return {
    users: store.users.users,
    count: store.users.count,
  }
})
export default class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <UserList users={this.props.users} count={this.props.count} />
    );
  }
}
