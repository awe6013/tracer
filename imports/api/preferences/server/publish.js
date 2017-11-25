Meteor.publish("myPreferences", function(){
  return Meteor.users.find({_id: this.userId}, {fields: {preferences: 1}});
});
