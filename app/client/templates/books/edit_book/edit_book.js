/*****************************************************************************/
/* EditBook: Event Handlers */
/*****************************************************************************/
Template.EditBook.events({
});

/*****************************************************************************/
/* EditBook: Helpers */
/*****************************************************************************/
Template.EditBook.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete book: "' + doc.title + " " + doc.author + '"?')) {
        this.remove();
        Router.go('booksList');
      }
    };
  }
});

/*****************************************************************************/
/* EditBook: Lifecycle Hooks */
/*****************************************************************************/
Template.EditBook.onCreated(function () {
});

Template.EditBook.onRendered(function () {
});

Template.EditBook.onDestroyed(function () {
});
