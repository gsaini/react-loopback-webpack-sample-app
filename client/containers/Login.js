import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	LeftPanel
} from '../components';
import { loginUser, resetValidationMessage } from '../actions';
import classNames from 'classnames';

import '../public/stylesheets/login.scss';

const propTypes = {
	email: React.PropTypes.string,
	password: React.PropTypes.string,
	validationError: React.PropTypes.object
};

const defaultProps = {
	email: '',
	password: '',
	validationError: null
};

class Login extends Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount(){
		this.props.actions.resetValidationMessage();
	}

	onGettingStartedClick(){
		this.props.history.push('/register');
	}

	onUserLogin(event){
		event.preventDefault();
		const refs = this.refs;
		const credentials = {
			email: refs.email.value,
			password: refs.password.value
		};
		this.props.actions.loginUser(credentials);

		// this.props.history.push('/permissions');
	}

	onChangeInput(){
		this.props.actions.resetValidationMessage();
	}

	renderAlertMessage(){
		let successMsg;
		let errorMsg;

		if(this.props.validationError){
			errorMsg = this.props.validationError.message;
		}

		const alertMessage = errorMsg;
		const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

		return (<div className={alertCls} role="alert">{ alertMessage }</div>);
	}
	
	render() {
		return (
			<section className="main-container">
				<LeftPanel clsName="login"/>
				<section className="login-form-wrapper">
					<form className="login-form" onSubmit={ (event) => this.onUserLogin(event) }>
						<div className="sign-in-info">
							<button className="btn btn-secondary" type="button" onClick={ () => this.onGettingStartedClick() }>get started</button>
							<span>Don't have an account?</span>
						</div>

						<div className="getting-started">
							<h1>Sign in to Ezoro.</h1>
							<h6>Enter your details below.</h6>
						</div>

						{
							this.renderAlertMessage()
						}
						
						<label htmlFor="email">email address</label>
						<input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@company.com" required autoFocus ref="email"/>
						
						<label htmlFor="password">password</label>
						<input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Enter your password" required ref="password"/>
						
						<div className="buttons">
							<button className="btn btn-primary" type="submit">Sign in</button>
						</div>
					</form>
				</section>
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
    actions: bindActionCreators({
	  loginUser,
	  resetValidationMessage
    }, dispatch),
  };
}

Login.defaultProps = defaultProps;
Login.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
