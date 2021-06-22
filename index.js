var app = angular.module("app",['ngRoute']);

app.controller('appController',['$scope', '$http', '$location',  
    function ($scope, $http, $location) {  
        $scope.fnGoToPage = function (args) {  
            $location.path('/' + args);  
        }  
    }  
]);

app.controller("HomeController", ['$scope', '$http', '$location',  
    function ($scope, $http, $location) {  
        $scope.fnGoToPage = function (args) {  
            $location.path('/' + args);  
        }  
    }
]);  

app.controller("FirstController", ['$scope', '$http',  
    function ($scope, $http) {  
        $scope.Message1 = "First page";  
    }  
]);  


app.controller('SecondController',function($scope){
    $scope.Message2 = "Second page";
})


app.controller('ThirdController',function($scope){
    $scope.Message3 = "Third page";
})

app.controller('HomeController',function($scope){
    $scope.messageHome = "Page Home "
})