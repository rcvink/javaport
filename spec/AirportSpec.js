describe('Airport', function(){

  describe('hanger', function() {
    it ('is empty initially', function() {
      airport = new Airport();
      expect(airport.hanger()).toEqual([]);
    });
  });

  describe('receiving planes, ', function() {
    it ('stores a plane in the hanger', function() {
      airport = new Airport();
      plane = new Plane();
      airport.receive(plane);
      expect(airport.hanger()).toContain(plane);
    });
  });

  describe('dispatching planes, ', function() {
    it ('removes a plane from the hanger', function() {
      airport = new Airport();
      plane = new Plane();
      airport.receive(plane);
      airport.dispatch(plane);
      expect(airport.hanger()).toEqual([]);
    });
  });

});
