(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
$scope.name = "Christian Jaze";
$scope.sayHello = function() {
    return "Hello World";
};
});

})();