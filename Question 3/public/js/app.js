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
        'ngStorage',
        'facebook'
    ])
    .config(['cfpLoadingBarProvider', 'FacebookProvider', function(cfpLoadingBarProvider, FacebookProvider){
        cfpLoadingBarProvider.includeSpinner   = false;
        cfpLoadingBarProvider.includeBar       = true;

        FacebookProvider.init('1111547278890927');

        /*$facebookProvider.setAppId('1111547278890927');
        $facebookProvider.setPermissions("public_profile");
        $facebookProvider.setVersion("v2.7");*/
    }])
    /*.run( function( $rootScope ) {
        // Load the facebook SDK asynchronously
        (function(){
            // If we've already installed the SDK, we're done
            if (document.getElementById('facebook-jssdk')) {return;}

            // Get the first script element, which we'll use to find the parent node
            var firstScriptElement = document.getElementsByTagName('script')[0];

            // Create a new script element and set its id
            var facebookJS = document.createElement('script');
            facebookJS.id = 'facebook-jssdk';

            // Set the new script's source to the source of the Facebook JS SDK
            facebookJS.src = '//connect.facebook.net/en_US/all.js';

            // Insert the Facebook JS SDK into the DOM
            firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
        }());
    })*/;