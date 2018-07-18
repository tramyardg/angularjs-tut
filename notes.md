#### Directive
Displays values on the page.
```
i.e. 
ng-app 
ng-controller
ng-repeat: loops through an array and displays each element
    ng-repeat="product in products"
ng-src
    ng-src="{{ product.cover }}"
ng-click
ng-model: binds the values of application data to HTML input controls
ng-bind: binds the application data to HTML tags
```

#### Expression
```
{{title}}
```

#### Module
Contains the different components of an AngularJS app.
```
var app = angular.module('myApp', []);
```

#### Controller
Manages the app's data.
```
// app: from module name
app.controller('HelloController', function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = 'Ray';
});
```

#### View
```
<div ng-controller="HelloController" >
   <h2>Welcome {{helloTo.title}} to the world of Tutorialspoint!</h2>
</div>
```

#### Filter
Formats the value of an expression.
```
// The pipe symbol (|) takes the output on the left and "pipes" it to the right.
// examples
{{product.pubdate | date}}
{{product.price | currency}}
{{product.name | uppercase}}
```

#### Custom Directive
```JavaScript
// controller
app.controller('MainController', ['$scope', function ($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };
}]);
// js/directives/appInfo.js
app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appMarketApp/appInfo.html'
  };
});
// 'E' means it will be used as a new HTML element
// The = tells the directive to look for an attribute named info in the <app-info>
```
Usage
```html
<!-- 'js/directives/appMarketApp/appInfo.html'-->
<img class="icon" ng-src="{{ info.icon }}">
<h2 class="title">{{ info.title }}</h2>
<p class="developer">{{ info.developer }}</p>
<p class="price">{{ info.price | currency }}</p>

<!-- index.html -->
<app-info info="move"></app-info>
```
