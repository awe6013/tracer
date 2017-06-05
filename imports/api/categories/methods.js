import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Categories } from '../../startup/both/collections.js';

Meteor.methods({
  addCategory(desc, type, user = "") {
    check(desc, String);
    check(type, String);
		check(user, String);

    return Categories.insert({
      desc: desc,
			type: type,
			user: user,
      createdAt: new Date()
    });
  },
});
