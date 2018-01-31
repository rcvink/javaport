describe('Plane', function(){
  var airport;

  beforeEach(function(){
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
