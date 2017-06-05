Meteor.methods({
	addFavorite(favorite){
		if(!Categories.findOne(favorite)){
			Meteor.Throw("ppp", "Invalid", "Invalid option. Please provide a proper category.");
		}
		Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"preferences.favorites": favorite}});
	},
	removeFavorite(favorite){
		if(!Categories.findOne(favorite)){
			Meteor.Throw("ppp", "Invalid", "Invalid option. Please provide a proper category.");
		}
		Meteor.users.update({_id: Meteor.userId()}, {$pull: {"preferences.favorites": favorite}});
	}
});
