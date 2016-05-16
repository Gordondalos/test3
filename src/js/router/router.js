myApp.config(['$routeProvider', function($routeProvide){

    $routeProvide
        .when ('/',{
        templateUrl:'templates/product.html',
        controller: 'myController'
    })
        .when ('/one',{
        templateUrl:'templates/one.html',
        controller: 'myController'
    })
        .when ('/two',{
        templateUrl:'templates/one.html',

    })
        .when ('/three',{
        templateUrl:'view/three.html',
        controller: 'threeCtrl'
    })
        .otherwise({
            redirectTo: '/'
        });
}])