describe('Plane', function(){
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('land', function(){
    it ('updates location to match destination', function() {
      plane.land(airport);
      expect(plane.location()).toEqual(airport);
    });
  });

  describe('take off', function() {
    it ('updates location to null', function() {
      plane = new Plane(airport)
      plane.takeOff();
      expect(plane.location()).toBeNull();
    });
  });
});
