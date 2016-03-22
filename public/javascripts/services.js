'use strict';

var app = angular.module("myApp");

app.service("addService", function($http) {
    this.resList = [];
    this.curRes = {};

    this.getAllRes = () => {
        $http.get("/reservations").then(res => {
            this.resList = res.data;
        }, err => {
            if(err){
              console.log(err);
            }
        });
    };

    this.getResById = (resId) => {
        $http.get(`/reservations/${resId}`).then(res => {
            this.resList = res.data;
        }, err => {
            if(err){
              console.log(err);
            }
        });
    };

        this.updateResById = (data) => {
        $http.put(`/reservations/${data._id}`,data).then(res => {
            console.log("successfully updated");
        }, err => {
            if(err){
              console.log(err);
            }
        });
    };

    this.addRes = (reserv) => {
        $http.put('/reservations', reserv).then(res => {
            this.resList.push(res.data);
        }, err => {
            if(err){
              console.log(err);
            }
        });
    };

    this.delRes = (id) => {
        $http.delete(`/reservations/${id}`).then(res => {
            this.getAllRes();
        }, err => {
            if(err){
              console.log(err);
            }
        });
    }

});
