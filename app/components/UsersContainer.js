import React from 'react';

export default class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="users-container">
         <div class="online-header">
            Currently online (<span class="online-count">1</span>):
         </div>
         <ul class="users">
            <li class="user">Traf</li>
         </ul>
      </div>
    );
  }
}
