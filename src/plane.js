var Plane = function(){
  this._location = null;
};

Plane.prototype.land = function(destination) {
  if (destination instanceof Airport){
    this._location = destination;
    destination.receive(this);
    return (true);
  } else {
    return (false);
  };
};

Plane.prototype.takeOff = function() {
  if (this._location instanceof Airport){
    this._location = null;
    return true;
  } else {
    return (false);
  };
};

Plane.prototype.location = function() {
  return this._location
};
