'use strict';

var app = angular.module("myApp", ['ui.router', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("resList", {
            url: "/",
            templateUrl: "partials/home.html",
            controller: "mainCtrl"
        })
        .state("editRes", {
            url: "/editRes",
            templateUrl: "partials/edit.html",
            controller: "resCtrl",
            params: {
                res: null
            }
        })

    $urlRouterProvider.otherwise("/");

});