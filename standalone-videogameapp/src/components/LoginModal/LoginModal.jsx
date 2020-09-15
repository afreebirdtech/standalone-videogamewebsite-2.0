import React, { Component } from 'react';

class LoginModal extends Component {
    state = {
        isHovering: false,
        isClicked: false,
        show: false,
        email: '',
        password: ''
    }

    showModal = () => {
        // Set will change to show modal
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        //  Set will change to hide modal   
        this.setState({
            show: false
        })
    }

    handleClick = () => {
        // Will handle click
        this.setState({
            isClicked: true
        })
    }

    handleChange = (e) => {
        // Will handle login change
        this.setState({
            password: e.target.value
        })
    }

    showLoginModal = () => {
        return (
            <div className='modal-container'>
                <form className='form' >
                    <input type="email" name="email" onChange={(e) => this.handleChange(e)} value={this.state.email} />
                    <input type="password" name="password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
                </form>
            </div>
        )
    }
    render = () => {
       return(
           this.showLoginModal
       )
    }
};

export default LoginModal;