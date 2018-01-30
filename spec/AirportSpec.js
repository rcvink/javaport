describe('Airport', function(){
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('hanger', function() {
    it ('is empty initially', function() {
      expect(airport.hanger()).toEqual([]);
    });
  });

  describe('receive', function() {
    it ('stores a plane in the hanger', function() {
      airport.receive(plane);
      expect(airport.hanger()).toContain(plane);
    });
  });

  describe('dispatch', function() {
    it ('removes a plane from the hanger', function() {
      airport = new Airport([plane]);
      airport.dispatch(plane);
      expect(airport.hanger()).toEqual([]);
    });
  });

});
