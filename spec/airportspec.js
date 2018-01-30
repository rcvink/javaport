describe('Airport', function(){

  describe('hanger', function() {

    it ('is empty initially', function() {
      airport = new Airport();
      expect(airport.hanger()).toEqual(airport._hanger);
    });

    it ('stores planes', function() {
      airport = new Airport();
      plane = new Plane();
      plane.land(airport);
      expect(airport.hanger()).toContain(plane);
    });

  });

});
