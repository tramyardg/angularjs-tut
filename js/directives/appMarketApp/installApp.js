app.directive('installApp', function () {
  return {
    restrict: 'E',
    scope: {}, // so there is no need for custom attr
    templateUrl: 'js/directives/appMarketApp/installApp.html',
    link: function (scope, element, attrs) {
      scope.buttonText = "Install";
      scope.installed = false;
      scope.download = function () {
        element.toggleClass('btn-active');
        if (scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});