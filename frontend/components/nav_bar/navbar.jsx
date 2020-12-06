import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }



  render () {
    return (
      <div>
        <nav className='nav-wrapper'>
          <ul className="nav-container">
            <li><Link to={'/'}><p className='splitwise-logo'></p></Link></li>
            {/* <li><button className='nav-btn nav-right'>{this.state.name}</button></li> */}
            <li><button  onClick={this.props.logout} className='nav-btn'>Log Out</button></li>
              {/* <ul className="nav-dropdown">
                <li><NavLink to={'/'} className='your-account'>Your Account</NavLink></li>
                <li><NavLink to={'/'} className='brand-logo'>Create a group</NavLink></li>
                <li><NavLink to={'/'} className='brand-logo'>Fairness Calculators</NavLink></li>
                <li><NavLink onClick={this.props.logout} className='brand-logo'>Log Out</NavLink></li>
              </ul> */}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;