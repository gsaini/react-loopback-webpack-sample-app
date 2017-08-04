import React, { Component } from 'react';
import '../public/stylesheets/footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <footer className="accounts-list">
                <ul className="footer-links">
                    <li><a href="javascript:void(0)">Company</a></li>
                    <li><a href="javascript:void(0)">About</a></li>
                    <li><a href="javascript:void(0)">Services</a></li>
                    <li><a href="javascript:void(0)">Support</a></li>
                    <li><a href="javascript:void(0)">Get in touch</a></li>
                </ul>
            </footer>
		);
	}
}

export default Footer;