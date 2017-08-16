import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class SignInForm extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			incorrectPass: false,
			username: "",
			password: ""
		}

		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
		this.signIn = this.signIn.bind(this);

	}

	handleSnackBarClose(event){
		this.setState({incorrectPass: false});
	}

	handleUserNameChange(event){
		this.setState({username: event.target.value});
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value});
	}

	signIn(event){
		event.preventDefault();
		let userVar = this.state.username.trim();
		let passwordVar = this.state.password.trim();
		Meteor.loginWithPassword(userVar, passwordVar, (error) => {
      if(error){
        this.setState({password: "", incorrectPass: true});
      }
      else{
        FlowRouter.go(FlowRouter.path("dashboard"));
      }
    });
	}

	render(){
		return (
			<form onSubmit={this.signIn}>
				<TextField
					floatingLabelText="Username"
					fullWidth={true}
					value={this.state.username}
					onChange={this.handleUserNameChange}
					ref='username' />
				<TextField
					floatingLabelText="Password"
					fullWidth={true}
					value={this.state.password}
					onChange={this.handlePasswordChange}
					type="password"
					ref='password' />
				<FlatButton
					label="Sign In"
					type="submit"
					onTouchTap={this.signIn}
					/>
				<Snackbar
					open={this.state.incorrectPass}
					message={"Incorrect username/password. Please try again."}
					autoHideDuration={11000}
					onRequestClose={this.handleSnackBarClose}
					/>
			</form>
		)
	}
}
