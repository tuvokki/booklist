Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/books/create', {
  name: 'createBook',
  controller: 'BooksController',
  action: 'create',
  where: 'client'
});

Router.route('/books', {
  name: 'booksList',
  controller: 'BooksController',
  action: 'list',
  where: 'client'
});

Router.route('/books/:_id', {
  name: 'editBook',
  controller: 'BooksController',
  action: 'edit',
  where: 'client'
});