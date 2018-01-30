var Plane = function(location = null){
  this._location = location;
};

Plane.prototype.land = function(destination) {
  this._location = destination;
};

Plane.prototype.takeOff = function() {
  this._location = null;
};

Plane.prototype.location = function() {
  return this._location
};
