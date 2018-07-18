#### Directive
Displays values on the page.
```
i.e. ng-app, ng-controller
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