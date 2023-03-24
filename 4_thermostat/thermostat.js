class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 32;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if(this.temperature < this.maxTemp) {
      this.temperature ++;
    }
  }

  down() {
    if(this.temperature > this.minTemp) {
      this.temperature --;
    }
  }

  setPowerSavingMode(bool) {
    if(bool == true) {
      this.maxTemp = 25;
      if (this.temperature > this.maxTemp) {
        this.temperature = this.maxTemp
      }
    } else if (bool == false) {
      this.maxTemp = 32;
    }
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    if(this.temperature >= 25) {
      return `temp: ${this.temperature} -- high-usage`
    } else if (this.temperature < 17) {
      return `temp: ${this.temperature} -- low-usage`
    } else {
      return `temp: ${this.temperature} -- medium-usage`
    }
  }

}

module.exports = Thermostat;