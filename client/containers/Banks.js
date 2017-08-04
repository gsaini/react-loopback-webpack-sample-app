import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../public/stylesheets/bank-details.scss';

import {
	LeftPanel
} from '../components';

class Banks extends Component {
	constructor(props) {
		super(props);
	}

	onConnectClick(){
		this.props.history.push('/accounts');
	}
	
	render() {
		return (
			<section className="main-container">
				<LeftPanel clsName="banks"/>
				<section className="bank-details">
					<header className="header-wrapper">
						<h2 className="welcome-heading-1">Connect you first bank account</h2>
						<h4 className="welcome-heading-2">Select one of the banks below</h4>
					</header>
					<section className="banks-list">
						<div className="row">
							<div className="col">
								<img src={require("../public/img/barclays.png")} className="img-responsive image-size" alt="Barclays Bank" />
								<p className="image-name">Barclays Bank</p>
							</div>
							<div className="col">
								<img src={require("../public/img/lloyds.png")} className="img-responsive image-size" alt="Barclays Bank" />
								<p className="image-name">Lloyds Bank</p>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<img src={require("../public/img/fd.png")} className="img-responsive image-size" alt="First Direct" />
								<p className="image-name">First Direct</p>
							</div>
							<div className="col">
								<img src={require("../public/img/hsbc.jpg")} className="img-responsive image-size" alt="HSBC" />
								<p className="image-name">HSBC</p>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<img src={require("../public/img/rbs.png")} className="img-responsive image-size" alt="Royal Bank of Scotland" />
								<p className="image-name">Royal Bank of Scotland</p>
							</div>
							<div className="col">
								<img src={require("../public/img/santander.png")} className="img-responsive image-size" alt="Santander" />
								<p className="image-name">Santander</p>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<img src={require("../public/img/nationwide.png")} className="img-responsive image-size" alt="Nationwide" />
								<p className="image-name">Nationwide</p>
							</div>
							<div className="col">
								<img src={require("../public/img/natwest.png")} className="img-responsive image-size" alt="Natwest" />
								<p className="image-name">Natwest</p>
							</div>
						</div>
					</section>
					<footer className="buttons">
						<button className="btn btn-primary" onClick={ () => this.onConnectClick() }>Connect</button>
					</footer>
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
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banks);
