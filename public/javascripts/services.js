'use strict';

var app = angular.module("myApp");

app.service("addService", function($http) {
    this.resList = [];

    this.getAllRes => () => {
        $http.get("/reservations").then(res => {
            res.send();
        }, err => {
            res.status(400).send(err);
            return;
        });
    }

});

module.exports =