/**
 * Created by Raphson on 7/24/16.
 */
app.controller('AuthController', ['$scope','Facebook', '$rootScope', '$location', 'amMoment', 'pouchService', 'toastr',
    '$localStorage',
    function($scope, Facebook, $rootScope, $location, amMoment, pouchService, toastr, $localStorage) {

    $scope.login = function() {
        Facebook.login(function(response) {
            console.log(response);
            if (response.status == 'connected') {
                $scope.me();
            }
        });
    };


    /**
     * me
     */
    $scope.me = function() {
        Facebook.api('/me', {
                fields: 'first_name, last_name, email, picture, gender, link'
            }
            ,function(response) {
                console.log(response);
                var userData = {
                    _id: new Date().toISOString(),
                    email: response.email,
                    name: response.first_name + " " + response.last_name,
                    link: response.link,
                    pix: response.picture.data.url,
                    lastseen: new Date(),
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