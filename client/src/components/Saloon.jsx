import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Saloon extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="row">
                        <NavLink to="/ParentBounty" activeClassName="selected">Sheriff's Board</NavLink>
                    </div>
                    <div className="row">
                        <NavLink to="/Bounty" activeClassName="selected">Bounty Board</NavLink>
                    </div>
                </div>
                <div className="col-md-3"></div>
                
            </div>
        );
    }
}

export default Saloon;