var Airport = function() {
  this._hanger = [];
};

Airport.prototype.hanger = function() {
  return this._hanger;
};

Airport.prototype.receive = function(plane) {
  // check if plane is a plane first?
  this._hanger.push(plane);
  // if not, throw an error?
};

Airport.prototype.dispatch = function(plane) {
  this._hanger.splice(this._hanger.indexOf(plane), 1);
};
