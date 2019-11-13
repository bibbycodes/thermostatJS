describe("Thermostat", function() {
  var thermo;

  beforeEach(function () {
    thermo = new Thermostat()
  })

  it("should have a starting temperature of 20", function() {
    expect(thermo.temperature).toEqual(20)
  })
});