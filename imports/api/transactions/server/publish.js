import { Meteor } from 'meteor/meteor';

Meteor.publish('allTransactions', function() {
	return Transactions.find();
});
