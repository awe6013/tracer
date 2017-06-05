import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  postTransaction(desc, date, amount, category) {
    check(desc, String);
    check(date, Date);
		check(amount, Number);
		check(category, String);

    return Transactions.insert({
      desc: desc,
			date: date,
			amount: amount,
			category: category,
			user: Meteor.userId(),
      postedAt: new Date(),
    });
  },
});
