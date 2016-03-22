'use strict';

var app = angular.module("myApp");

app.controller('mainCtrl', function($scope, $state, addService) {

  updateList();

    function updateList() {
        addService.getAllRes();
    }

    $scope.$watch(function() {
        return addService.resList;
    }, function(curVal, prevVal) {
        $scope.resList = curVal;
    });

    $scope.resCheckIn = function(inp){
      addService.updateResById(inp.res);
      updateList();
    } 

    $scope.editResInfo = function(inp){
      $state.go("editRes",{res:inp.res});
    }

});

app.controller("resCtrl",function($scope, $state, addService){

var newRes = angular.copy($state.params.res);
console.log(newRes);
newRes.resTime = new Date(moment(newRes.resTime).format("YYYY"),
  moment(newRes.resTime).format("MM")-1,
  moment(newRes.resTime).format("DD"),
  moment(newRes.resTime).format("hh"),
  moment(newRes.resTime).format("mm"),
  0);
// newRes.time = Date(moment(newRes.resTime).format("hh:mm A"));


$scope.editRes = newRes;

$scope.updateRes = function(inp){
  console.log(inp);
  addService.updateResById(inp);
      $state.go('resList');
}
// $scope.
});