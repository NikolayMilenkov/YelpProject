var app = angular.module('myApp', []);
app.controller('login', function ($scope, $http) {
    $scope.logMe = function () {
        // $http.get('https://projectxnr.herokuapp.com/users').then(function (response) {
        //    console.log(response.data);
        // });
        //console.log($scope.user);
        var x = JSON.stringify($scope.user);
        //console.log(x);
        $http({
            url: 'https://projectxnr.herokuapp.com/users',
            method: "POST",
            data: x,
            withCredentials: true,
            headers:  {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function (data){
            console.log(data)
        });

        // $http.post('http://localhost:3000/users', x).then(function (response) {
        //     console.log(response.data);
        // }, (function errorCallback(response) {
        //     console.log("Error" + response.data);
        // }));
    }
});