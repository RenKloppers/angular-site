var CONTENT_PATH = "content";

var app = angular.module('angularSiteApp', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
        templateUrl: CONTENT_PATH + '/main.html',
        activetab: 'main',
        controller: 'MainCtrl'
    }).
        when('/content/:contentid', {
            templateUrl: function (params) {
                return CONTENT_PATH + '/' + params.contentid + '.html';
            },
            activetab: 'content',
            controller: 'PageCtrl'
        }).
        otherwise({ redirectTo: '/'})
});


app.controller('MainCtrl', function ($scope) {

});

app.controller('PageCtrl', function ($scope) {
    $scope.sayHi = function(){
        alert("hi!");
    };
    $scope.happy = "happy";
    $scope.days = "days";
    $scope.together = function () {
        return $scope.happy + $scope.days;
    };
});






