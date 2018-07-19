app.factory('photos',
    [
      '$http',
      function ($http) {
        return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
            .success(function (data) {
              return data;
            }).error(function (data) {
              return data;
            });
      }
    ]
);
// data is passed from services -> controllers -> views
