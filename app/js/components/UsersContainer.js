import React from 'react';

export default class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let users = this.props.users.map((user) => {
      return <li class="user">{user}</li>;
    });
    return (
      <div class="users-container">
         <div class="online-header">
            Currently online (<span class="online-count">1</span>):
         </div>
         <ul class="users">
            {users}
         </ul>
      </div>
    );
  }
}
