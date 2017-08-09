(
    function () {

        function userCtrl($scope, userSvc) {
            $scope.userCount = 1;
            userSvc.getUsers()
                .then(function (response) {
                    $scope.users = response.data.users;
                })
                .catch(function (response) {
                    console.log(response);
                });

            $scope.showMore = function () {
                $scope.userCount +=2;
            };
        }
        angular.module("user")
            .controller("userCtrl", ["$scope", "userSvc", userCtrl]);
    }

)();