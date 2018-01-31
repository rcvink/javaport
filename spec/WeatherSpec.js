console.log('hello');

describe('Weather', function() {
  beforeEach(function() {
    weather = new Weather();
  });

  describe('isStormy', function() {
    it('returns true', function() {
      expect(weather.isStormy()).toEqual(true);
    });

    it('returns false', function() {
      expect(weather.isStormy()).toEqual(false);
    });
  });
});
