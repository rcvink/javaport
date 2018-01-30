describe('Plane', function(){
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  })

  describe('landing', function(){
    it ('updates location to match destination', function() {
      plane.land(airport);
      expect(plane.location()).toEqual(airport);
    });
  });

  describe('taking off', function() {
    it ('updates location to null', function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(plane.location()).toBeNull();
    });
  });
});
