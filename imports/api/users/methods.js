import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  createAccount(username, password) {
    check(username, String);
    check(password, String);

		Accounts.createUser({
			username: username,
			password: password
		});
  }
});
