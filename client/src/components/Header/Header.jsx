import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar expand="lg" variant="light" bg="fade">
                        <h1 id="navbarLogo" ><NavLink id="headBtn" to="/"  activeClassName="selected">GiddyItUp</NavLink></h1>
                        <div className="ml-3 headBtn"><NavLink id="headBtn" to="/Saloon"  activeClassName="selected">Saloon</NavLink></div>
                        <div className="ml-3 headBtn"><NavLink id="headBtn" to="/Bounty" activeClassName="selected">Bounty Board</NavLink></div> 
                        <div className="ml-3 headBtn"><NavLink id="headBtn" to="/ParentBounty" activeClassName="selected">Sheriff's Bounty Board</NavLink></div> 
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Header;