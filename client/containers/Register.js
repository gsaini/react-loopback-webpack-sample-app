import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	LeftPanel
} from '../components';
import { registerUser, resetValidationMessage } from '../actions';
import classNames from 'classnames';

import '../public/stylesheets/register.scss';

const message = 'Well done! User created successfully.'

const propTypes = {
	email: React.PropTypes.string,
	password: React.PropTypes.string,
	registeredUser: React.PropTypes.object,
	validationError: React.PropTypes.object
};

const defaultProps = {
	email: '',
	password: '',
	registeredUser: null,
	validationError: null
};

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = props;
	}

	componentWillUnmount(){
		this.props.actions.resetValidationMessage();
	}

	onRegister(event){
		event.preventDefault();

		const refs = this.refs;
		const user = {
			email: refs.email.value,
			password: refs.password.value
		};

		this.props.actions.registerUser(user, this.refs.registerForm);
	}

	onSignInClick(){
		this.props.history.push('/login');
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
		else if(this.props.registeredUser && this.props.registeredUser.id) {
			successMsg = message;
		}

		const alertMessage = errorMsg || successMsg;
		const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

		return (<div className={alertCls} role="alert">{ alertMessage }</div>);
	}
	
	render() {
		return (
			<section className="main-container">
				<LeftPanel clsName="register"/>
				<section className="register-form-wrapper">
					<form className="register-form" ref="registerForm" onSubmit={ (event) => this.onRegister(event) }>
						<div className="sign-in-info">
							<button className="btn btn-secondary" type="button" onClick={ () => this.onSignInClick() }>sign in</button>
							<span>Already have an account?</span>
						</div>

						<div className="getting-started">
							<h1>Get started with Ezoro.</h1>
							<h6>Making real change.</h6>
						</div>

						{ this.renderAlertMessage() }

						<label htmlFor="email">email address</label>
						<input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@company.com" required onChange={ () => this.onChangeInput() } autoFocus ref="email"/>
						
						<label htmlFor="password">password</label>
						<input type="password" className="form-control form-control-lg" id="password" name="password" required onChange={ () => this.onChangeInput() } ref="password"/>
						
						<div className="buttons">
							<button className="btn btn-primary" type="submit">Continue</button>
						</div>
						
						<p className="footer">By clicking "Continue" I agree to Ezoro's <a href="javascript:void(0)">Terms of Service.</a></p>
					</form>
				</section>
			</section>
		);
	}
}

Register.defaultProps = defaultProps;
Register.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
	  registerUser,
	  resetValidationMessage
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
