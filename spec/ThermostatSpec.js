describe("Thermostat", function() {
  var thermo;

  beforeEach(function () {
    thermo = new Thermostat()
  })

  it("should have a starting temperature of 20", function() {
    expect(thermo.temperature).toEqual(20)
  })

  it("can increase the temperature", function() {
    thermo.up(5)
    expect(thermo.temperature).toEqual(25)
  })

  it("can decrease the temperature", function() {
    thermo.down(5)
    expect(thermo.temperature).toEqual(15)
  })

  it("has a minimum temperature", function() {
    expect(thermo.minTemp).toEqual(10)
  })
});