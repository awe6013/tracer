import { Categories } from '/imports/startup/both/collections';
import {
	loadFavorites
 } from '/imports/api/preferences/preferences';

 const FAVORITE_KEY = 'categories';

export {
	createCategory,
	buildCategoryTree,
	loadCategories,
	loadFavoriteCategories,
	favoriteCategory,
	unfavoriteCategory
};


// Categories schema
// {
//         "_id" : "aJfMnQ46DfAQCAXen",
//         "desc" : "Salary",
//         "type" : "8ivqCetuMcxQhd5XW",
//         "user" : "",
//         "createdAt" : ISODate("2017-06-19T21:53:49.973Z")
// }

function createCategory({
	desc = "New Category",
	type,
	user
}){
	Categories.insert({
		desc: desc,
		type: type,
		user: user,
		createdAt: new Date()
	});
}

function loadFavoriteCategories() {
	const query = {
		_id: {
			$in: loadFavorites({ type: 'categories' })
		}
	};
	return loadCategories( query );
}

function loadCategories( query ) {
	if ( !query ) {
		query = {};
	}
	return Categories.find( query ).fetch();
}

function buildCategoryTree({ type = "", userid = "" }) {
	let parentCategories = loadCategories({
		type: type,
		$or: [{user: userid}, {user: ""}]
	});
	parentCategories.map( (parentCategory) => {
		let children = loadCategories({
			type: parentCategory._id,
			$or: [{user: userid}, {user: ""}]
		});
		if( children.length > 0 ) {
			children = buildCategoryTree({type: parentCategory._id, userid: userid});
		}
		parentCategory.children = children;
	});
	return parentCategories;
}

function favoriteCategory( categoryID ) {
	if ( !Categories.findOne( categoryID ) ) {
		Meteor.Throw("Invalid", "Invalid", "Invalid option. Please provide a proper category.");
	}

	addFavorite({ type: FAVORITE_TYPE, favoriteID: categoryID });
}

function unfavoriteCategory( categoryID ) {
	if ( !Categories.findOne( categoryID ) ) {
		Meteor.Throw("Invalid", "Invalid", "Invalid option. Please provide a proper category.");
	}

	removeFavorite({ type: FAVORITE_TYPE, favoriteID: categoryID });
}
