describe('Plane', function(){
  describe('landing', function(){

    it ('updates location to match destination', function() {
      airport = new Airport()
      plane = new Plane();
      plane.land(airport);
      expect(plane.location()).toEqual(airport);
    });

  });

  describe('taking off', function() {

    it ('updates location to null', function() {
      plane = new Plane();
      airport = new Airport();
      plane.land(airport);
      plane.takeOff(airport);
      expect(plane.location()).toBeNull();
    });

  });

});
