import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="webgl-content">
        <div id="unityContainer"></div>
        <div className="footer">
          <div
            className="fullscreen"
            onclick="unityInstance.SetFullscreen(1)"
          ></div>
          <div className="title">Expand view</div>
        </div>
      </div>

      <div
        nav
        className="navbar fixed-top navbar-light navbar-expand navbar-custom "
      >
        <div className="container">
          <a className="navbar-brand" href="/blog/">
            Videogame
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-item nav-link"
                href="https://www.afreebird.org/"
              >
                Back to AFB <span className="sr-only">(current)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    <br/>
    <br/>
    <br/>
      <div className="container">
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/2717928?color=333333"
          allowfullscreen=""
          height="580px"
          width="100%"
          
        >
          <a href="https://nelsonwang.itch.io/afreebird-videogame">
            Play afreebird-videogame on itch.io
          </a>
        </iframe>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Enter Password</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <form action="">
                <div className="modal-body">
                  <input
                    id="enter_input"
                    type="text"
                    placeholder="Password"
                    className="form-control"
                  ></input>
                  <p>
                    <em>Use for now: afb2020</em>
                  </p>
                  <p>
                    <em>Disclaimer: please don't share the password</em>
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onclick="checkPassword()"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
