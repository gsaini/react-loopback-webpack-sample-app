import React, { Component } from 'react';
import '../public/stylesheets/header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light">
                <a className="navbar-brand" href="javascript:void(0)">
					<img src="../public/img/Ezoro_Logo_Colour.png" width="130" height="30" className="d-inline-block align-top" alt="" />
				</a>
				<div className="navbar-toggler-right">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item"><a className="nav-link" href="javascript:void(0)">Product</a></li>
						<li className="nav-item"><a className="nav-link" href="javascript:void(0)">Solutions</a></li>
						<li className="nav-item"><a className="nav-link" href="javascript:void(0)">Services</a></li>
						<li className="nav-item"><a className="nav-link" href="javascript:void(0)">Resources</a></li>
						<li className="nav-item"><a className="nav-link" href="javascript:void(0)">Account</a></li>
					</ul>
				</div>
            </nav>
		);
	}
}

export default Header;