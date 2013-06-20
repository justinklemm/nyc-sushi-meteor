
// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  
  // clear all existing spots
  //Spots.remove({});

  if (Spots.find().count() === 0) {
    var data = [
      { name: "Sushi Yasuda",
        description: "204 East 43rd St., New York, NY 10017",
        votes: 0,
        timestamp: (new Date()).getTime()
      },
      { name: "Ushiwakamaru",
        description: "136 W Houston St., New York, NY 10012",
        votes: 0,
        timestamp: (new Date()).getTime()
      },
      { name: "Sushi Azabu",
        description: "428 Greenwich St., New York, NY 10013",
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
