describe('AirTrafficControl', function() {
  beforeEach(function() {
    airTrafficControl = new AirTrafficControl();
    airport = jasmine.createSpyObj('airport', ['receive', 'dispatch']);
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });

  describe('orderLanding', function() {
    it('instructs the plane to land', function() {
      airTrafficControl.orderLanding(plane, airport);
      expect(plane.land).toHaveBeenCalled();
    });

    it('instructs the airport to receive', function() {
      airTrafficControl.orderLanding(plane, airport);
      expect(airport.receive).toHaveBeenCalled()
    });
  });

  describe('orderTakeOff', function() {
    it('instructs the plane to take off', function() {
      airTrafficControl.orderTakeOff(plane, airport);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it('instructs the airport to dispatch', function() {
      airTrafficControl.orderTakeOff(plane, airport);
      expect(airport.dispatch).toHaveBeenCalledWith(plane);
    });
  });
});
