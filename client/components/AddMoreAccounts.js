import React, { Component } from 'react';
import '../public/stylesheets/add-more-accounts.scss';

class AddMoreAccounts extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="add-more-accounts-container">
				<div className="wrapper">
                	<span>Want to add more accounts?</span><button className="btn btn-secondary">Connect Accounts</button>
				</div>
			</section>
		);
	}
}

export default AddMoreAccounts;