import React, { Component } from 'react';
import '../public/stylesheets/account-details.scss';

class AccountDetails extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="accounts-wrapper">
				<h6 className="accounts-heading-1">Connected Bank Accounts</h6>
				<div className="panel">
					<img src={require("../public/img/lloyds.png")} className="img-responsive account-image-size" alt="Barclays Bank" />
					<div className="account-details-wrapper" style={{ position: "relative" }}>
						
						<p className="bank-account-details">
							<span className="bank-name">Club Lloyds</span>
							<span className="sort-code">47-67-55</span>
							<span className="account-number">74964431</span>
						</p>
						
						<p className="account-balance">
							<span className="balance">£460.89</span> Current Balance
						</p>
						
						<p className="available-funds">
							£460.89 Funds available <span className="glyphicon glyphicon-question-sign"></span>
						</p>
						
						<div className="overdraft">
							<p>view your 2017 overdraft options ></p>
							<p>Updated 2 mins ago</p>
						</div>
					</div>
					<div className="action-buttons">
						<div className="buttons">
							<button className="btn btn-secondary">view statement</button>
							<button className="btn btn-secondary">make a payment</button>
							<button className="btn btn-primary">more actions</button>
						</div>
					</div>
				</div>
				<div className="panel">
					<img src={require("../public/img/lloyds.png")} className="img-responsive account-image-size" alt="Barclays Bank" />
					<div className="account-details-wrapper" style={{ position: "relative" }}>
						
						<p className="bank-account-details">
							<span className="bank-name">Club Lloyds</span>
							<span className="sort-code">47-67-55</span>
							<span className="account-number">74964431</span>
						</p>
						
						<p className="account-balance">
							<span className="balance">£460.89</span> Current Balance
						</p>
						
						<p className="available-funds">
							£460.89 Funds available <span className="glyphicon glyphicon-question-sign"></span>
						</p>
						
						<div className="overdraft">
							<p>view your 2017 overdraft options ></p>
							<p>Updated 2 mins ago</p>
						</div>
					</div>
					<div className="action-buttons">
						<div className="buttons">
							<button className="btn btn-secondary">view statement</button>
							<button className="btn btn-secondary">make a payment</button>
							<button className="btn btn-primary">more actions</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AccountDetails;
