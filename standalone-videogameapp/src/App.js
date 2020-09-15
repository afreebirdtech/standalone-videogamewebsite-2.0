import React from "react";
import db from './db'
import NavBar from './components/NavBar/NavBar'
import UnityComponent from './components/Unity/UnityComponent'
import {Route, Switch, withRouter} from 'react-router-dom';
import "./App.css";
import Login from "./components/Login/Login";

class App extends React.Component {
  state = {
    email: '',
    password: '',
    token: '',
    emails: []
  }
  componentDidMount = () => {
    if (!!this.state.token) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }
  }

  handleLoginSubmit = (e, userPassword, userEmail) => {
    e.preventDefault();
    if (userPassword === 'password') {
      // this.postEmailtoDb(userEmail) Need to send post req to the db
      this.setState({
        password: userPassword,
        token: this.createToken()
      }, () => {
        localStorage.setItem('token', this.state.token)
        this.props.history.push('/game')
      })
    }
  }

  postEmailtoDb = (email) => {
    db.post('emails.json', email).then( res => {
      console.log(res)
    })
  }

  createToken = () => {
    let tokenWord = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 0;
    const charLen = characters.length

    for (let i = 0; i < length; i++) {
      tokenWord += characters.charAt(Math.floor(Math.random() * charLen))
    }
    return tokenWord
  }
  
  handleModalExit = () => {
    // Handle Modal exit
  }

  render = () => {

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path={'/login'} render={() => <Login handleLoginSubmit={this.handleLoginSubmit}/>}/>
          <Route path={'/game'} render={() => <UnityComponent/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
