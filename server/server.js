
// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Spots.find().count() === 0) {
    var data = [
      { name: "Sushi Yasuda",
        description: "A brief description of the restaurant goes here.",
        votes: 0,
        timestamp: (new Date()).getTime()
      },
      { name: "Ushiwakamaru",
        description: "A brief description of the restaurant goes here.",
        votes: 0,
        timestamp: (new Date()).getTime()
      },
      { name: "Sushi Azabu",
        description: "A brief description of the restaurant goes here.",
        votes: 0,
        timestamp: (new Date()).getTime()
      }
    ];

    for (var i = 0; i < data.length; i++) {
      Spots.insert(data[i]);
    }
  }
});


// Make spots collection available
Meteor.publish('spots', function () {
  return Spots.find();
});
