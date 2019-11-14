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

  it('can reset the temperature to 20',function(){
    thermo.reset()
    expect(thermo.temperature).toEqual(20);
  });

  it('returns Medium energy usage when the temperature is between 18 and 25',function(){
    expect(thermo.energyUsage()).toEqual("medium-usage");
  });

  it('returns low energy usage when temperature is less than 18 degrees',function(){
    thermo.down(3)
    expect(thermo.energyUsage()).toEqual("low-usage");
  });

  it("returns 'high-usage' usage when temperature is above 25 degrees",function(){
    thermo.togglePowerSaving()
    thermo.up(6);
    expect(thermo.energyUsage()).toEqual("high-usage");
  });

  it("doesnt let the temperature exceed the value for max-temp", function() {
    for(i = 0; i < 20; i++) {
      thermo.up(1)
    }
    expect(thermo.temperature).toEqual(thermo.maxTemp)
  })

  it("returns a 'Off' when power saving is off", function() {
    thermo.togglePowerSaving()
    expect(thermo.returnValForPowerSaving()).toEqual("Off")
  })

  it("returns a human readable 'On' when powerSaving is on", function() {
    expect(thermo.returnValForPowerSaving()).toEqual("On")
  })

  it("doesnt let the temperature go below the value for min-temp", function() {
    for(i = 0; i < 20; i++) {
      thermo.down(1)
    }
    expect(thermo.temperature).toEqual(thermo.minTemp)
  })

  it("changes the temperature to maxTemp if temperature is higher than maxTemp when power saving mode is switched on", function() {
    thermo.togglePowerSaving()
    thermo.up(20)
    thermo.togglePowerSaving()
    expect(thermo.temperature).toEqual(thermo.maxTemp)
  })
});
