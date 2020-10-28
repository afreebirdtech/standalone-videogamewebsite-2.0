import React from "react";
import db from './db'
import Nav from './components/Nav/Nav'
import UnityComponent from './components/Unity/UnityComponent'
import {Route, Switch, withRouter} from 'react-router-dom';
import "./App.css";
import Login from "./components/Login/Login";
import firebase from './firebase'

// Our main app! All components will load through it.
class App extends React.Component {
  state = {
    email: '',
    password: '',
    token: '',
    emails: []
  }

  componentDidMount = () => {
    this.getEmailsfromDB()
    // We're checking if our users browser has a token and if it does to push us to our game component.
    if (!!localStorage.getItem('token')) {
      this.props.history.push('/game')
    } else {
      this.props.history.push('/login')
    }
  }

  // handleLoginSubmit = (e, userPassword, userEmail) => {
  //   // This function is pushed through Logins props and allows us to check basic authentication.
  //   e.preventDefault();
  //   const password = process.env.REACT_APP_SUPER_SECRET_PASSWORD
  //   if (userPassword === `${password}`) {
  //     // If the password matches the one in our env file ->
  //     this.postEmailtoDb(userEmail)
  //     // send it to fire base 
  //     this.setState({
  //       password: userPassword,
  //       token: this.createToken()
  //     }, () => {
  //       // Create a token for our users and set it to localstorage
  //       localStorage.setItem('token', this.state.token)
  //       // Push it to our game component
  //       this.props.history.push('/game')
  //     })
  //   }
  // }


  handleEmailSubmit = (e, userEmail) => {
    e.preventDefault();
      this.state.emails.map((email) => {
        if (email === userEmail) {
          this.setState({
            token: this.createToken()
          }, () => {
            localStorage.setItem('token', this.state.token)
            this.props.history.push('/game')
          })
        }
      })
    
  }
  
  postEmailtoDb = (userEmail) => {
    // We're using JS Date and pushing through (YEAR, HOUR, MINUTES, SECONDS)
    let date = new Date(365 * 24 * 60 * 60)
    firebase.database().ref('users').push({
      // Sending our firebase database the users email and date they logged in.
      email: userEmail,
      date: date.toUTCString()
    })
  }
  getEmailsfromDB = () => {
    let usersRef = firebase.database().ref('1q9aep58LBGxxluQybRwfSRkcBTtVZW9Ev_AjLnu6_pU');
    usersRef.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const child = childSnapshot.val()
        let emails = child.map((val) => {
          return val.email
        })
        this.setState({
          emails
        })
      });
    })
  };

  createToken = () => {
    // This function is used to generate a random token for our users. So they dont need to log in everytime they forget to logout.
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
    // Handles logging out for our users.
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
          <Route path={'/login'} render={() => <Login handleEmailSubmit={this.handleEmailSubmit}/>}/>
          <Route path={'/game'} render={() => <UnityComponent/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
