var Plane = function(){
  this._location = null;
};

Plane.prototype.land = function(destination) {
  if (destination instanceof Airport){
    this._location = destination;
  } else {
    // throw an error
  };
};

Plane.prototype.takeOff = function() {
  if (this._location instanceof Airport){
    this._location = null;
  } else {
    // throw an error
  };
};

Plane.prototype.location = function() {
  return this._location
};
