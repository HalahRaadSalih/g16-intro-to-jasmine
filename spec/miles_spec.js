var myFunctions = require('../lib/miles');

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};
describe('Miles', function(){
	it('Checks if the car has enough gas to travel the entire route', function(){
		expect(myFunctions.hasEnoughGas(car,route)).toEqual(true);
	});
});