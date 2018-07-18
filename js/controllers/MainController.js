app.controller('MainController', ['$scope',
  function ($scope) {
    $scope.title = 'Tops Sellers in Books';
    $scope.promo = 'ad';
    $scope.product = {
      name: 'The Book of Trees',
      price: 19
    };
  }]);