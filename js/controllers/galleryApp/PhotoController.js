app.controller('PhotoController',
    [
      '$scope',
      'photos',
      '$routeParams',
      function ($scope, photos, $routeParams) {
        photos.success(function (data) {
          $scope.detail = data[$routeParams.id]; // in the views.photo.html do: {{detail.title}}
        });
      }
    ]
);
