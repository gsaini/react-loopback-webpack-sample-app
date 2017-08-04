import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
	Header, 
	Footer, 
	AccountDetails,
	AddMoreAccounts
} from '../components';
import '../public/stylesheets/accounts.scss';

class Accounts extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="accounts-container">
				<Header />
				<section className="connected-accounts-total">
					<div className="wrapper">
						<h3>Connected accounts</h3><h3>£460.89</h3>
					</div>
				</section>
				<AccountDetails welcomeText={ this.props.welcomeText } />
				<AddMoreAccounts />
				<Footer />
			</section>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
