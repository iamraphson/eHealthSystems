/**
 * Created by Raphson on 7/24/16.
 */
app.controller('AuthController', ['$scope','Facebook', '$rootScope', '$location', 'amMoment', 'pouchService', 'toastr',
    '$localStorage',
    function($scope, Facebook, $rootScope, $location, amMoment, pouchService, toastr, $localStorage) {

    $scope.login = function() {
        /*$facebook.login().then(function() {
            $scope.me();
        });*/
        Facebook.login(function(response) {
            if (response.status == 'connected') {
                $scope.me();
            }
        });
    };


    /**
     * me
     */
    $scope.me = function() {
        /*$facebook.api("/me").then(
            function(response) {
                console.log(response);
                /!*$scope.welcomeMsg = "Welcome " + response.name;
                $scope.isLoggedIn = true;*!/
            },
            function(err) {
                $scope.welcomeMsg = "Please log in";
            }
        );*/
        Facebook.api('/me', {
            fields: "id, name, first_name, last_name, age_range, link, gender, locale, picture, timezone, updated_time, verified, email"
        },function(response) {
                var userData = {
                    _id: response.id,
                    email: response.email,
                    name: response.name,
                    link: response.link,
                    lastseen: new Date()
                };

                pouchService.addNewData(userData, function(status, data){
                    if(status){
                        $localStorage.eHealth_User = response;
                        toastr.success('You have successfully signed in!');
                        $location.path('/');
                    } else {
                        console.log(data);
                        toastr.error(data.message, data.status);
                    }
                });
        });
    };
}]);

app.controller('LogoutController', ['$location', 'toastr', '$localStorage', 'Facebook', '$scope',
    function($location, toastr, $localStorage, Facebook, $scope){

    if (!$localStorage.eHealth_User) { return; }
    Facebook.logout(function() {
        $scope.$apply(function() {
            delete $localStorage.eHealth_User;
            toastr.info('You have been logged out');
            $location.path('/auth/login');
        });
    });
}]);