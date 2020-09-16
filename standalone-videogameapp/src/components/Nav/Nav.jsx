import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Nav.css'

const NavigationBar = () => {
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

export default NavigationBar