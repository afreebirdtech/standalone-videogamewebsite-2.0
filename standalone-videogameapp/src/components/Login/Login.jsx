import React from 'react';
import './Login.css'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    render = () => {
        return (
            <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state.password, this.state.email)}>
                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}/>
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                <input type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default Login;