describe('Plane', function(){
  describe('landing', function(){

    it ('succeeds', function() {
      airport = new Airport()
      plane = new Plane();
      expect(plane.land(airport)).toBe(true);
      expect(plane.location()).toEqual(airport);
    });

    it ('fails if no airport is provided', function() {
      plane = new Plane();
      expect(plane.land()).toBe(false);
    });
  });

  describe('taking off', function() {

    it ('succeeds', function() {
      plane = new Plane();
      airport = new Airport();
      plane.land(airport);
      expect(plane.takeOff()).toBe(true);
      expect(plane.location()).toBeNull();
    });

    it ('fails if already airborne', function() {
      plane = new Plane();
      expect(plane.takeOff()).toBe(false);
    });

  });

});
