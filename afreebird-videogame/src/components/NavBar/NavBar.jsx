import React, { Component } from 'react';

const NavBar = () => {
    return (
        <div className="navbar navbar-light navbar-expand navbar-custom ">
            <div className="container">
                <a className='navbar-brand'>
                    VideoGame
                    {/* React Router to handle links */}
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <a 
                            className='nav-item nav-link'
                            href='https://www.afreebird.org'
                        >
                            Back to AFB 
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar;