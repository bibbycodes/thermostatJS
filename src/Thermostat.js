function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.isPowerSavingOn = true
}

Thermostat.prototype.up = function (amount) {
  this.temperature += amount
}

Thermostat.prototype.down = function (amount) {
  this.temperature -= amount
}

Thermostat.prototype.togglePowerSaving = function () {
  this.isPowerSavingOn = !this.isPowerSavingOn

  if (this.isPowerSavingOn) {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }
}

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  return "Medium usage"
};
