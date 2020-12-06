import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoAcct = this.demoAcct.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
    .then(() => this.props.history.push('/dashboard'))
    // .catch(err => { console.log(err) })
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.requestBills();
    this.props.fetchComments();
  }

  demoAcct(e) {
    e.preventDefault();
    const user = { email: 'TestEmail@hmail.com', password: 'abc12345' }
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className='login-page-btn-container'>
          <Link to={'/'}><p className='green-logo'></p></Link>
          <nav className='login-page-btns'>
            <Link to={'/login'}><button className='log-page-login-btn' type='button'>Log in</button></Link>
            &nbsp;or&nbsp;
            <Link to={'/signup'}><button className='log-page-signup-btn' type='button'>Sign up</button></Link>
          </nav>
        </div>
        
        <Link to={'/'} className='login-main-logo'></Link>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label 
            className={this.props.errors.length > 0 ? 'error-msgs' : ''}>{ this.renderErrors()} 
              {/* <Link className='x-button'>x</Link> */}
          </label>

          
          <label className='login-introduce-welcome'>Welcome to Splitwise</label>
          
          <div className="login-form">
            <p className='login-form-text'>Email address</p>
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input-box'
              />
            <br/>
            <p className='login-form-text'>Password</p>
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input-box'
              />
            <br/>
            <input className="login-submit" type="submit" value={'Login'} />
            <button className='demo-btn' onClick={this.demoAcct}>Demo Account</button>
          </div>
        </form>
        <br/>
        <footer className='login-footer'>
          <nav className='rights-reserved'>
          <p className='new-york-city'>Made with ☻ in NYC, NY, USA</p>
          <p className='copyright'>Copyright © 2020 Cleverbreak, Inc. All rights reserved.</p>
          </nav>
        </footer>
      </div>
    );
  }
}

export default LoginForm;