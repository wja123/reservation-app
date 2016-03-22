'use strict';

var app = angular.module("myApp");

app.controller('mainCtrl', function($scope, addService) {
    console.log("mainCtrl");
    console.log(moment());
});