import React from 'react';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props)

    
  }

  componentDidMount() {
    this.props.receiveAllUsers()

  }

  render () {
    const { allUsers, friends } = this.props;
    // window.allUsers = allUsers
    // window.friends = friends

    if (!friends) {
      return null
    }

    return (
      <span className='friend-main-container'>
        <label className='friend-title'>
            <br/>
            FRIENDS <button>add</button>
            
        </label>
          <ul>
            {
              friends.map(friend => (
                <li className ="friend-name" key={friend}>👤 {allUsers[friend].name}</li>
              ))
            }
          </ul>
          

  
      </span>
    )
  }
}

export default FriendIndex;