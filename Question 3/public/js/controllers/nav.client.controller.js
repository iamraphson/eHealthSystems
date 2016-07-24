/**
 * Created by Raphson on 7/24/16.
 */
app.controller('NavbarCtrl', function($scope, $localStorage) {
    $scope.isAuthenticated = function() {
        return $localStorage.eHealth_User ? true : false;
    };
});