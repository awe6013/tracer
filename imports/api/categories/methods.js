import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Categories } from '../../startup/both/collections.js';

import {
	createCategory,
	favoriteCategory,
	unfavoriteCategory
} from './categories';


Meteor.methods({

  addCategory( desc, type, user = "" ) {
    check(desc, String);
    check(type, String);
		check(user, String);

    return createCategory({desc: desc, type: type, user: user});
  },

	favoriteCategory( categoryID ) {
		favoriteCategory( favorite );
	},

	removeFavorite( favorite ) {
		unfavoriteCategory( favorite );
	}

});
