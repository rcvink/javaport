var Airport = function() {
  this._hanger = [];
};

Airport.prototype.hanger = function() {
  return this._hanger;
};

Airport.prototype.receive = function(plane) {
  this._hanger.push(plane);
};
