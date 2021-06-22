var $routeProviderReference; 
  
app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {  
    $routeProviderReference = $routeProvider;  
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: '/home'
    });
}]);  
  
app.run(['$route', '$http', '$rootScope',  
    function ($route, $http, $rootScope) {  
        $http.get("routedata.json").success(function (data) {  
            var iLoop = 0, currentRoute;  
            for (iLoop = 0; iLoop < data.records.length; iLoop++) {  
                currentRoute = data.records[iLoop];  
                var routeName = "/" + currentRoute.KeyName;  
                $routeProviderReference.when(routeName, {  
                    templateUrl: currentRoute.PageUrls  
                });  
            }  
            $route.reload();  
        });  
    }]);  