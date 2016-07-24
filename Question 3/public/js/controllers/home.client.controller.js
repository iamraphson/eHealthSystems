/**
 * Created by Raphson on 7/24/16.
 */
app.controller('HomeController', function($scope, $localStorage, pouchService) {
    $scope.facebookData = [];
    pouchService.fetchAllData().then(function (response) {
        console.log(response.rows);
        $scope.facebookData  = response.rows;
    });
});