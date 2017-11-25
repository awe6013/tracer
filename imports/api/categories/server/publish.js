import { Meteor } from 'meteor/meteor';
import { Categories } from '/imports/startup/both/collections';

Meteor.publish('allCategories', function() {
	return Categories.find({$or:[{user: ""}, {user: this.userId}]});
});
