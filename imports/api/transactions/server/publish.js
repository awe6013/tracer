import { Meteor } from 'meteor/meteor';
import { Transactions } from '/imports/startup/both/collections.js';

Meteor.publish('allTransactions', function() {
	return Transactions.find({user: this.userId});
});
