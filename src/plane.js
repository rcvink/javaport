var Plane = function(){
};
Plane.prototype.land = function(destination) {
  if (destination instanceof Airport){
    return (true);
  }
  else
    {
      return (false);
    }
};
