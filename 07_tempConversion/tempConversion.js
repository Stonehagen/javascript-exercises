const convertToCelsius = function(fahr) {
  let cel = (fahr - 32) * ( 5/9 );
  return Math.round(cel, 1);
};

const convertToFahrenheit = function(cel) {
  let fahr = (cel * ( 9/5 ) + 32);
  return Math.round(fahr, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
