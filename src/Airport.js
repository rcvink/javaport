var Airport = function(hanger = []) {
  this._hanger = hanger;
};

Airport.prototype.hanger = function() {
  return this._hanger;
};

Airport.prototype.receive = function(plane) {
  this._hanger.push(plane);
};

Airport.prototype.dispatch = function(plane) {
  this._hanger.splice(this._hanger.indexOf(plane), 1);
};
