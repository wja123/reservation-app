'use strict';

var app = angular.module("myApp");
app.controller('navCtrl', function($scope, $state, addService) {

    $scope.searchPatrons = function(inp) {
        if (inp) {
            addService.getResByName(inp);
        }
    }


});

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

    $scope.resCheckIn = function(inp) {
        addService.updateResById(angular.copy(inp.res));
        addService.getAllRes();
    }

    $scope.editResInfo = function(inp) {
        $state.go("editRes", {
            res: inp.res
        });
    }

    $scope.deleteResInfo = function(inp) {
        console.log(inp.res._id);
        addService.delRes(inp.res._id);
    }

});

app.controller("resCtrl", function($scope, $state, addService) {

    if ($state.params.res) {
        var newRes = angular.copy($state.params.res);
        console.log(newRes);
        newRes.resTime = new Date(moment(newRes.resTime).format("YYYY"),
            moment(newRes.resTime).format("MM") - 1,
            moment(newRes.resTime).format("DD"),
            moment(newRes.resTime).format("hh"),
            moment(newRes.resTime).format("mm"),
            0);
        $scope.editRes = newRes;
    }
    $scope.updateRes = function(inp) {
        if ($state.params.res) {
            var addValue = angular.copy(inp);
            addService.updateResById(addValue);
            $state.go('resList');

        } else {
            var addValue = angular.copy(inp);
            addService.addRes(addValue);
            $state.go('resList');

        }
    }
    // $scope.
});