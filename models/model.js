'use strict';

var mongoose = require("mongoose");

var Reservation = mongoose.model("Reservation",{
  resTime:Date,
  patronName: String,
  partySize: Number,
  allergies: Array,
  checkedIn: Boolean,
  phoneNumber: String
});

module.exports = Reservation;