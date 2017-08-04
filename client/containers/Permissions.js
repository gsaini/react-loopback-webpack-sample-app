import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../public/stylesheets/permissions.scss';
import {
	LeftPanel
} from '../components';

const propTypes = {
  permissionsList: React.PropTypes.array
};

const defaultProps = {
  permissionsList: [{
	id: 1,
	name: 'Account details',
	items: [{
		code: 11,
		name: 'Your name, account number and sort code'
	},{
		code: 12,
		name: 'Balance and available funds'
	}]
  }, {
	id: 2,
	name: 'Transactions',
	items: [{
		code: 21,
		name: 'Amount and date of each transaction'
	},{
		code: 22,
		name: 'Full statement details of each transaction'
	}]
  }]
};

class Permissions extends Component {
	constructor(props) {
		super(props);
	}

	onContinueClick(){
		// const permissions = [];
		// this.props.actions.permissions(permissions);
		this.props.history.push('/banks');
	}

	render() {
		return (
			<section className="main-container">
				<LeftPanel clsName="permissions" />
				<section className="permissions-list">
					<h1>Welcome to Ezoro</h1>
					<p>To offer this service we need your consent for <b style={{ color: '#735ad8' }}>repeat</b> access to the follwing information both the Accounts you will authorize.</p>
					<div className="grid">
						<h5>Account details</h5>
						<ul id="account-details-list">
							<li>
								<input id="chkbox-1-1" type="checkbox" />
								<label htmlFor="chkbox-1-1">Your name, account number and sort code</label>
							</li>
							<li>
								<input id="chkbox-1-2" type="checkbox" />
								<label htmlFor="chkbox-1-2">Balance and available funds</label>
							</li>
						</ul>

						<h5>Transactions</h5>
						<ul id="transactions-list">
							<li>
								<input id="chkbox-2-1" type="checkbox" />
								<label htmlFor="chkbox-2-1">Amount and date of each transaction</label>
							</li>
							<li>
								<input id="chkbox-2-2" type="checkbox" />
								<label htmlFor="chkbox-2-2">Full statement details of each transaction</label>
							</li>
						</ul>
					</div>
					<div className="buttons">
						<button className="btn btn-primary" onClick={ () => this.onContinueClick() }>Continue</button>
					</div>
				</section>
			</section>
		);
	}
}

Permissions.defaultProps = defaultProps;
Permissions.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);