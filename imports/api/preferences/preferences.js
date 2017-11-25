
const FAVORITES_PATH = 'preferences.favorites.';
const PREFERENCES_SELECTOR = ()=>{return {_id: Meteor.userId()}};

export {
	loadFavorites,
	addFavorite,
	removeFavorite
};

function loadFavorites({ type }) {
	const favorites = Meteor.user().preferences.favorites[ type ];
	if ( favorites ) {
		return favorites;
	}
	return [];
}

function addFavorite({ type, favoriteID }) {
	let key = FAVORITES_PATH + type;

	return Meteor.users.update(PREFERENCES_SELECTOR(), {$addToSet: {key: favorite}});
}

function removeFavorite({ type, favoriteID }) {
	let key = FAVORITES_PATH + type;

	return Meteor.users.update(PREFERENCES_SELECTOR(), {$pull: {key: favorite}});
}
