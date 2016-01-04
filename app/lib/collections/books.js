Books = new Mongo.Collection('books');

Books.attachSchema(new SimpleSchema({
  author: {
    type: String,
    label: "Author",
    max: 100
  },
  title: {
    type: String,
    label: "Title",
    max: 100
  },
  ageType: {
    type: String,
    label: "For age",
    allowedValues: ['Kids', 'Adults', 'All', 'None'],
  },
  score: {
    type: Number,
    label: "Score",
    optional: true,
    allowedValues: [1,2,3,4,5,6,7,8,9,10],
  },
  rating: {
    type: String,
    label: "Rating",
    allowedValues: ['Funny', 'Normal', 'Hectic', 'Unsuitable', 'Boring', 'Management book', 'Tech. manual', 'Literature'],
    optional: true
  }
}));

if (Meteor.isServer) {
  Books.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
