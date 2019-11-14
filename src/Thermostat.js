function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
  this.maxTemp = 25
  this.isPowerSavingOn = true
}


Thermostat.prototype.up = function (amount) {
  if (this.temperature + amount < this.maxTemp) {
    this.temperature += amount
  } else {
    this.temperature = this.maxTemp
  }
}

Thermostat.prototype.down = function (amount) {
  if (this.temperature - amount > this.minTemp) {
    this.temperature -= amount
  } else {
    this.temperature = this.minTemp
  }
}

Thermostat.prototype.togglePowerSaving = function () {
  this.isPowerSavingOn = !this.isPowerSavingOn
  this.setTemp()
}

Thermostat.prototype.setTemp = function() {
  if (this.isPowerSavingOn) {
    this.maxTemp = 25
    if (this.temperature > this.maxTemp) {
      this.temperature = this.maxTemp
    }

  } else {
    this.maxTemp = 32
  }
}

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return "low-usage"
  }
  if (this.temperature > 25) {
    return "high-usage"
  } else {
    return "medium-usage"
  }
};

Thermostat.prototype.returnValForPowerSaving = function () {
  if (this.isPowerSavingOn) {
    return "On"
  } else {
    return "Off"
  }
}