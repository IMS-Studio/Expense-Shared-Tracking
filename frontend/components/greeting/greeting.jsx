import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveAllUsers();

  }

  render () {
    return (
      <div>
        <div className='splash-nav'>
          <div>
            <Link to={'/signup'}><button className='signup-btn' type='button'>Sign up</button></Link>
            <Link to={'/login'}><button className='login-btn' type='button'>Log in</button></Link>
          </div>
          <Link to={'/'} className='logo-link'></Link>
        </div>
        
        <div className = 'greeting-body'>
          <div className='greeting-body-top'>
            <div className='greeting-body-top-left'>
              <p className='top-title'>Less stress when sharing expenses ON ANYTHING</p>
              <p className='top-text'>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
              <Link className='signup-btn-body-container' to={'/signup'}><button className='signup-btn-body'>Sign up</button></Link>
            </div>
            <div className='main-logo-front-page'></div>
            {/* <img src={window.backgroundImage} /> */}
            

          </div>
          {/* <nav className='greeting-body-mid-left'>
            <h2 className='greeting-body-title'>Track balances</h2>
            <p className='greeting-body-text'>Keep track of shared expenses, balances, and who owes who.</p>
            <p className='greeting-body-img-top-left'></p>
          </nav>
          <nav className='greeting-body-mid-right'>
            <h2 className='greeting-body-title'>Organize expenses</h2>
            <p className='greeting-body-text'>Split expenses with any group: trips, housemates, friends, and family.</p>
            <p className='greeting-body-img-top-right'></p>
          </nav>
          <nav className='greeting-body-low-left'>
            <h2 className='greeting-body-title'>Add expenses easily</h2>
            <p className='greeting-body-text'>Quickly add expenses on the go before you forget who paid.</p>
            <p className='greeting-body-img-mid-left'></p>
          </nav>
          <nav className='greeting-body-low-right'>
            <h2 className='greeting-body-title'>Pay friends back</h2>
            <p className='greeting-body-text'>Settle up with a friend and record any cash or online payment.</p>
            <p className='greeting-body-img-mid-right'></p>
          </nav> */}
          {/* <nav className='greeting-body-bottom'>
            {/* <div className ='greeting-bottom-body-text'>
              <p className= 'greeting-bottom-body-title'>Get even more with PRO</p>
              <p className='greeting-bottom-body-textbody'>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
              <Link to={'/signup'}><button className='bottom-signup-btn' type='button'>Sign up</button></Link>
            </div>
            <p className='greeting-body-img-bottom'></p>
          </nav> */}
          <nav className='greeting-bottom-list-container'>
          {/* <p className='greeting-bottom-title'>The whole nine yards</p> */}
            <nav className='greeting-bottom-main-section'>
              {/* <ul className='greeting-bottom-list-left'>
                <li>Add groups and friends</li>
                <li>Split expenses, record debts</li>
                <li>Equal or unequal splits</li>
                <li>Split by % or shares</li>
                <li>Calculate total balances</li>
                <li>Suggested repayments</li>
                <li>Simplify debts</li>
                <li>Recurring expenses</li>
              </ul> */}
              {/* <ul className='greeting-bottom-list-center'>
                <li>Offline mode</li>
                <li>Cloud sync</li>
                <li>Spending totals</li>
                <li>Categorize expenses</li>
                <li>Easy CSV exports</li>
                <li>7+ languages</li>
                <li>100+ currencies</li>
                <li>Payment integrations</li>
              </ul>
              <ul className='greeting-bottom-list-right'>
                <li>A totally ad-free experience</li>
                <li>Currency conversion</li>
                <li>Receipt scanning</li>
                <li>Itemization</li>
                <li>Charts and graphs</li>
                <li>Expense search</li>
                <li>Save default splits</li>
                <li>Early access to new features</li>
              </ul> */}
            </nav>
            <ul className='core-pro-features'>
              {/* <li>Core features</li>
              <li>Pro features</li> */}
              <li><a href='https://linkedin.com/in/kevin-romano//'>Linkedin</a></li>
              <li><a href='https://github.com/IMS-Studio/'>Github</a></li>
            </ul>
          </nav>
        </div>
        <footer className='footer-background'></footer>
      </div>
    )
    }
  }








export default Greeting;