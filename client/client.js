
// Subscribe to 'spots' (restaurants) collection on startup.
var spotsHandle = Meteor.subscribe('spots');


Template.spots.loading = function () {
  return !spotsHandle.ready();
};


Template.spots.spots = function () {
  return Spots.find({}, {sort: {votes: -1, name: 1}});
};


Template.spots.events({
  'click .btn-vote' : function () {
    // console logging
    if (typeof console !== 'undefined') console.log("Voting for a spot: " + this._id);

    // increment votes
    Spots.update(this._id, {$set: {votes: this.votes + 1}});
  }
});


Template.submit.events({
  'click .btn-submit' : function () {
    // get name and description
    var name = $('#input-name');
    var description = $('#input-description');

    // check input fields
    if(!isFieldValid(name)) return false;
    if(!isFieldValid(description)) return false;

    // console logging
    if (typeof console !== 'undefined') console.log("Adding new spot: " + name.val() + " - " + description.val());

    // insert new record
    Spots.insert({
      name: name.val(),
      description: description.val(),
      votes: 1,
      timestamp: (new Date()).getTime()
    });

    // clear input fields
    name.val('');
    description.val('');
  }
});


function isFieldValid(input) {
  if(input.val() == ""){
    input.effect("shake");
    return false;
  }
  return true;
}

