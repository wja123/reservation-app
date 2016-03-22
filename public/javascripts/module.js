'use strict';

var app = angular.module("myApp", ['ui.router', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/home.html",
            controller: "mainCtrl"
        })
        .state("resList", {
            url: "/resList",
            templateUrl: "/reservations.html",
            controller: "resCtrl"
        })

        $urlRouterProvider.otherwise("/");

});