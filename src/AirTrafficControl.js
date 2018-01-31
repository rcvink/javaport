var AirTrafficControl = function() {

};

AirTrafficControl.prototype.orderLanding = function(plane, targetAirport) {
  targetAirport.receive(plane);
  plane.land(targetAirport);
};

AirTrafficControl.prototype.orderTakeOff = function(plane, airport) {
  airport.dispatch(plane);
  plane.takeOff();
};
