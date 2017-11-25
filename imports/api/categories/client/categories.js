
export {
	addCategory
};


function addCategory({ name, id }){
	Meteor.call(
		"addCategory",
		name,
		id,
		Meteor.userId(),
		function( err, result ){
			if (err) {
				window.alert(err);
			}
		}
	);
}
