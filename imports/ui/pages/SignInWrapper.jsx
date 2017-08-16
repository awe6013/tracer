import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { CreateAccount } from '/imports/api/users/accounts.js';
import SignInForm from '/imports/ui/components/SignIn/SignInForm.jsx';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { FlowRouter } from 'meteor/kadira:flow-router';


export default class SignInWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {

		}

	}

	createAccount(){
		let vals = this.refs.signInForm.state;
		let username = vals.username.trim();
		let password = vals.password.trim();
		// Meteor.call("createAccount", username, password, (error) => {
		// 	if(!error){
		// 		FlowRouter.go(FlowRouter.path("dashboard"));
		// 	}
		// });
		console.log("I am before the try");
		try{
			console.log("I am in the try");
			CreateAccount(username, password);
			console.log("I am about to change the path.");
			FlowRouter.go(FlowRouter.path("dashboard"));
		}
		catch (error){
			console.log("I am in the catch");
			console.log(error);
		}
		console.log("I finished the createAccount handler function");
	}

	render(){
		return (
			<div className="center-panel">
				<Card>
					<CardTitle
						title="Welcome to Tracer"
						subtitle="Please enter your username and password to sign in."
						/>
					<CardText>
						<SignInForm ref="signInForm" />
					</CardText>
					<CardActions>
						<FlatButton label="Forgot Password" />
						<FlatButton label="Create Account" onTouchTap={this.createAccount.bind(this)} />
					</CardActions>
				</Card>
			</div>
		)
	}
}
