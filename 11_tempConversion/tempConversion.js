const convertToCelsius = function(fahren) {
  let cel = (fahren - 32) * (5 /9);
  return parseFloat(cel.toFixed(1))
};

const convertToFahrenheit = function(cel) {
  let fahren = cel * (9 / 5) + 32;
  return parseFloat(fahren.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
