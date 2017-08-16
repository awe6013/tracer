import React from 'react';
import AppBar from 'material-ui/AppBar';
import { FlowRouter } from 'meteor/kadira:flow-router';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends React.Component {
	constructor(){
		super();

		this.logout = this.logout.bind(this);

	}

	logout(){
		Meteor.logout( ()=>{
			FlowRouter.go(FlowRouter.path("signin"));
		});
	}

	render(){
		let header = this.props.header;
		return (
			<AppBar
				title={header}
				iconElementRight={
					<FlatButton
						label="logout"
						onTouchTap={this.logout}
						/>
				}
				/>
		)
	}
}
