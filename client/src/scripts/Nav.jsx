import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/Nav.scss";
import logo from "../../src/assets/aim-logo.png";
class Nav extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <nav className="NavBar sticky-top">
              <div className="row navInner">
              <div className="logo-phone show-phone">
                    <a href="!#" className="href">
                      <img className="logo_nav_phone" alt="" src={logo} />
                    </a>
                  </div>
                <div className="col-sm-1 col-md-1 col hide">
                  <div className=" inner row">
                    <a href="!#" className="href">
                      <img className="logo_nav" alt="" src={logo} />
                    </a>
                  </div>
                </div>
                <div className="col-sm-10 col-md-10 col hide">
                  <div className="row">
                    <div className="collection">
                      <span className="atl button-nav">
                        {" "}
                        Atal Tinkering Labs{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 col-md-1 col hide">
                  <div className="inner">
                    <span className="lastLogo">AIM</span>
                  </div>
                </div>
              </div>
            </nav>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default Nav;
