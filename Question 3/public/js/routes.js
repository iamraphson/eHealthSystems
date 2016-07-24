/**
 * Created by Raphson on 7/24/16.
 */
var appRoutes = angular.module('appRoutes', []);

appRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: './views/home.client.view.html',
            controller: 'HomeController',
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
        .when('/logout', {
            template: null,
            controller: 'LogoutController',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .otherwise({ redirectTo: '/' });

    function skipIfLoggedIn($localStorage, $q, $location) {
        var deferred = $q.defer();
        delete $localStorage.eHealth_User;
        if ($localStorage.eHealth_User) {
            //deferred.resolve();
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