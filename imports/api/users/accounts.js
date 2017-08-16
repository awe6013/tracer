import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

export {
	CreateAccount
 };

var CreateAccount = function(username, password){
	console.log("I am in the CreateAccount function");
	check(username, String);
	check(password, String);

	console.log("I am about to CreateUser");
	Accounts.createUser({
		username: username,
		password: password
	});
	console.log("I create user");
}
