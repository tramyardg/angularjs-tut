var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/gallery-app/home.html'
  }).when('/photos/:id', {
    controller: 'PhotoController',
    templateUrl: 'views/gallery-app/photo.html'
  }).otherwise({
    redirectTo: '/'
  });
});
