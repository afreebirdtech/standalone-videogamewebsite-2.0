import React from "react";
import db from './db'
import Nav from './components/Nav/Nav'
import UnityComponent from './components/Unity/UnityComponent'
import {Route, Switch, withRouter} from 'react-router-dom';
import "./App.css";
import Login from "./components/Login/Login";
import firebase from './firebase'


class App extends React.Component {
  state = {
    email: '',
    password: '',
    token: '',
    emails: []
  }

  componentDidMount = () => {
    if (!!localStorage.getItem('token')) {
      this.props.history.push('/game')
    } else {
      this.props.history.push('/login')
    }
  }

  handleLoginSubmit = (e, userPassword, userEmail) => {
    e.preventDefault();
    if (userPassword === 'password') {
      this.postEmailtoDb(userEmail)
      this.setState({
        password: userPassword,
        token: this.createToken()
      }, () => {
        localStorage.setItem('token', this.state.token)
        
        this.props.history.push('/game')
      })
    }
  }

  postEmailtoDb = (Useremail) => {
    firebase.database().ref('users').push({email: Useremail}).then(console.log)
  }

  createToken = () => {
    let tokenWord = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    const charLen = characters.length

    for (let i = 0; i < length; i++) {
      tokenWord += characters.charAt(Math.floor(Math.random() * charLen))
    }
    return tokenWord
  }

  handleLogOut = () => {
    this.setState({
      password: '',
      token: ''
    }, () => {
      localStorage.clear()
      this.props.history.push('/login')
    })
  }
  
  handleModalExit = () => {
    // Handle Modal exit
  }

  render = () => {
    return (
      <div className="App">
        <Nav token={localStorage.getItem('token')} handleLogout={this.handleLogOut}/>
        <Switch>
          <Route path={'/login'} render={() => <Login handleLoginSubmit={this.handleLoginSubmit}/>}/>
          <Route path={'/game'} render={() => <UnityComponent/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
