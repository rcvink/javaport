var Weather = function() {

};

Weather.prototype.isStormy = function() {

};

Weather.prototype._random = function(min, max) {
  return Math.random() * (max - min) + min
};
