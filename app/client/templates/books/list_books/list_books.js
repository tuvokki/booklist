/*****************************************************************************/
/* ListBooks: Event Handlers */
/*****************************************************************************/
Template.ListBooks.events({
});

/*****************************************************************************/
/* ListBooks: Helpers */
/*****************************************************************************/
Template.ListBooks.helpers({
  books: function() {
    return Books.find();
  }
});

/*****************************************************************************/
/* ListBooks: Lifecycle Hooks */
/*****************************************************************************/
Template.ListBooks.onCreated(function () {
});

Template.ListBooks.onRendered(function () {
});

Template.ListBooks.onDestroyed(function () {
});
