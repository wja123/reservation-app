'use strict';

var express = require("express");
var moment = require("moment");

var router = express.Router();
var Reservations = require("../models/model.js");

router.get("/", function(req, res) {
    Reservations.find({}, function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function(req, res) {
    Reservations.findById({
        _id: req.params.id
    }, function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});


router.get("/name/:patronName", function(req, res) {
    Reservations.find({
        patronName: new RegExp(req.params.patronName,'i')
    }, function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});

router.get("/date/:resTime", function(req, res) {
    Reservations.find({
        resTime: req.params.resTime
    }, function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});

router.put("/:id", function(req, res) {
    Reservations.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true},function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
            res.status(200).send(data);
        
    });
});

router.post("/", function(req, res) {
    var newRes = new Reservations();
    newRes.resTime = req.body.resTime;
    newRes.patronName = req.body.patronName;
    newRes.partySize = req.body.partySize;
    newRes.allergies = req.body.allergies;
    newRes.checkedIn = req.body.checkedIn;
    newRes.phoneNumber = req.body.phoneNumber;
    newRes.save(function(err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});

router.delete("/:id", function(req, res) {
    Reservations.findById({
        _id: req.params.id
    }, function(err, data) {
        if (err) {
            res.send(err);
            return;
        }
        data.remove();
        res.send("Successfully Deleted");
    });
});

router.get("/today",function(res,req,next){
  var startOfToday = new Date().now();
  var endOfToday = new Date().now();
Reservations.find({resTime:{'$gte':startOfToday,'$lte':endOfToday}},function(err,data){
  if(err){
    res.status(400).send(err);
  }
  res.send(data);
});
});
module.exports = router;