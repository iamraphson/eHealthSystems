/**
 * Created by Raphson on 7/24/16.
 */
var appRoutes = angular.module('appRoutes', []);

appRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: './views/home.client.view.html',
            controller: null,
            resolve: {
                loginRequired: loginRequired
            }
        })
        .when('/auth/login', {
            templateUrl: './views/login.client.view.html',
            controller: 'AuthController',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        .otherwise({ redirectTo: '/' });

    function skipIfLoggedIn($localStorage, $q, $location) {
        var deferred = $q.defer();
        if ($localStorage.eHealth_User) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }

    function loginRequired($localStorage, $q, $location) {
        var deferred = $q.defer();
        if ($localStorage.eHealth_User) {
            deferred.resolve();
        } else {
            $location.path('/auth/login');
        }
        return deferred.promise;
    }

    //eliminate the hashbang
    $locationProvider.html5Mode(true);

}]);