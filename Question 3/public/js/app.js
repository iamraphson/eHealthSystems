/**
 * Created by Raphson on 7/23/16.
 */
var app = angular
    .module('eHealth', [
        'ngRoute',
        'ngMessages',
        'angularMoment',
        'angular-loading-bar',
        'ui.bootstrap',
        'appRoutes',
        'ngSanitize',
        'toastr',
        'ngLodash',
        'pouchdb',
        'facebook',
        'ngStorage'
    ])
    .config(['cfpLoadingBarProvider', 'FacebookProvider', function(cfpLoadingBarProvider, FacebookProvider){
        cfpLoadingBarProvider.includeSpinner   = false;
        cfpLoadingBarProvider.includeBar       = true;

        FacebookProvider.init('1111547278890927');
    }]);