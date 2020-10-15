import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import './Nav.css'

import '../../fonts/LosAndesLotaGrotesqueAlt1Regular.otf'
// Our navbar 
class NavigationBar extends Component {

    displayLogout = () => {
        // This function checks for a token in localstorage and displays the correct navbar accordingly.
        if (!!this.props.token) {
            return (
                <div>
                    <Navbar className='color-nav' variant="light">
                        <Navbar.Brand >
                            <img 
                            src={require('../../images/logo.png')}
                            width='30' 
                            height='30' 
                            className='d-inline-block align-top' 
                            alt=""/>
                        </Navbar.Brand>
                        <Nav.Item>
                            <Nav.Link href='www.afreebird.org' disabled>
                            AFreeBird
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/logout" onClick={() => this.props.handleLogout()}>Logout</Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <Navbar className='custom-nav' variant="light">
                        <Nav.Item>
                            AFB Video Game
                        </Nav.Item>
                    </Navbar>
            </div>
            )
        } else {
            return (
                <div>
                    <Navbar className='color-nav' variant="light">
                        <Navbar.Brand >
                            <img 
                            src={require('../../images/logo.png')}
                            width='30' 
                            height='30' 
                            className='d-inline-block align-top' 
                            alt=""/>
                        </Navbar.Brand>
                        <Nav.Item>
                            <Nav.Link href='www.afreebird.org' disabled>
                            AFreeBird
                            </Nav.Link>
                        </Nav.Item>
                    </Navbar>
            </div>
            )
        }
    }

    render = () => {
        return (
            <div>
                {this.displayLogout()}
            </div>
        )
    }
}
export default NavigationBar