import { Meteor } from 'meteor/meteor';
import { Categories } from '../../../startup/both/collections.js';

Meteor.publish('allCategories', function() {
	return Categories.find({$or:[{user: ""}, {user: this.userId}]});
});
