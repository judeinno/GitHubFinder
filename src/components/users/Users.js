import React, { Component } from 'react'
import UserItem from './UserItem'
class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'judeinno',
        avatar_url:
          'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png',
        html_url: 'https://github.com/judeinno',
      },
      {
        id: '2',
        login: 'bruce',
        avatar_url:
          'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png',
        html_url: 'https://github.com/bruce',
      },
      {
        id: '3',
        login: 'mark',
        avatar_url:
          'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png',
        html_url: 'https://github.com/mark',
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user =>
          <UserItem key={user.id} user={user} />
        )}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
