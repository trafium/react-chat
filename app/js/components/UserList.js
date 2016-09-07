import React from 'react';

export default class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    users: []
  };

  render() {
    let users = this.props.users.map((user) => {
      return <li class="user">{user.name}</li>;
    });
    return (
      <div class="users-container">
         <div class="online-header">
            Currently online (<span class="online-count">{this.props.count}</span>):
         </div>
         <ul class="users">
            {users}
         </ul>
      </div>
    );
  }
}
