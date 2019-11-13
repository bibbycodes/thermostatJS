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

  it("has a minimum temperature 10", function() {
    expect(thermo.minTemp).toEqual(10)
  })

  it("has a maximum temperature of 25", function() {
    expect(thermo.maxTemp).toEqual(25)
  })

  it("has a power saving mode", function() {
    expect(thermo.isPowerSavingOn).toEqual(true)
  })

  it("has a maximum temperature of 32 when power saving is off", function() {
    thermo.togglePowerSaving()
    expect(thermo.maxTemp).toEqual(32)
  })
});