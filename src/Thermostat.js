function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
  this.isPowerSavingOn = true
}

Thermostat.prototype.up = function (amount) {
  this.temperature += amount
}

Thermostat.prototype.down = function (amount) {
  this.temperature -= amount
}