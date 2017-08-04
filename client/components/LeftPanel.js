import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../public/stylesheets/left-panel.scss';

class LeftPanel extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<aside className={`left-panel ${this.props.clsName}`}>
				<div>&nbsp;</div>
			</aside>
		);
	}
}

export default connect(state => state)(LeftPanel);