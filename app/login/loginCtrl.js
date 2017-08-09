(function(){
    function loginCtrl($scope){
        var vm= this;
       vm.loginDetails ={};
        vm.emailRegex =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        $scope.login= function(){
            console.log(vm.loginDetails);
        }
    }
    angular.module("login")
    .controller("loginCtrl",["$scope",loginCtrl])
    
})();