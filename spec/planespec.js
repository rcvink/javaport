describe('Plane', function(){
  describe('landing', function(){
    it ('succeeds', function() {
      airport = new Airport()
      plane = new Plane();
      expect(plane.land(airport)).toBe(true);
    });
    it ('fails if no airport is provided', function() {
      plane = new Plane();
      expect(plane.land()).toBe(false);
    });
  });
});
