//temp starts at 20 degrees
// getTemperature() returns temp
// up() temp += 1
// down() temp -= 1
//setPowerSavingsMode(bool) 
    // true =set max temp to 25
    // false = 32
// reset - temp back to 20

const Thermostat = require ('./thermostat.js');

describe('Thermostat', () => {
  it('returns default temperature', () => {
    const t = new Thermostat();
    const x = t.getTemperature();
    expect(x).toEqual(20);
  })

  it('raises the temperature by 1', () => {
    const t = new Thermostat();
    t.up();
    x = t.getTemperature();
    expect(x).toEqual(21);
  })

  it('lowers the temperature by 1', () => {
    const t = new Thermostat();
    t.down();
    const x = t.getTemperature();
    expect(x).toEqual(19);
  })

  it('raise the temperature past the mox', () => {
    const t = new Thermostat();
    for (let i = 0; i < 20; i++) {
      t.up();
    }
    const x = t.getTemperature();
    expect(x).toEqual(32);

  })

  it('lowers the temperature past the min', () => {
    const t = new Thermostat();
    for(let i = 0; i < 20; i++) {
      t.down();
    }
    const x = t.getTemperature();
    expect(x).toEqual(10)
  })

  it('turns on power saving mode', () => {
    const t = new Thermostat();
    t.setPowerSavingMode(true);
    const x = t.maxTemp;
    expect(x).toEqual(25);
  })

  it('turns power saving mode on then off', () => {
    const t = new Thermostat();
    t.setPowerSavingMode(true);
    t.setPowerSavingMode(false);
    const x = t.maxTemp
    expect(x).toEqual(32);

  })

  it('turns up temperature past 25 then turns on power saving mode', () => {
    const t = new Thermostat();
    for(let i = 0; i < 10 ; i++) {
      t.up();
    }
    t.setPowerSavingMode(true);
    const x = t.getTemperature();
    expect(x).toEqual(25);
  })

  it('resets the temperature to 20 degrees', () => {
    const t = new Thermostat();
    t.up();
    t.up();
    t.reset();
    const x = t.getTemperature();
    expect(x).toEqual(20);
  })

  it('displays usage stats when medium usage', () => {
    const t = new Thermostat();
    const x = t.getUsage();
    expect(x).toEqual('temp: 20 -- medium-usage');
  })

  it('displays usage stats when high usage', () => {
    const t = new Thermostat();
    for(let i = 0; i < 10; i++) {
      t.up();
    }
    const x = t.getUsage();
    expect(x).toEqual('temp: 30 -- high-usage');
  })

  it('displays usage stats when low usage', () => {
    const t = new Thermostat();
    for (let i =0; i< 5; i++) {
      t.down();
    }
    const x = t.getUsage();
    expect(x).toEqual('temp: 15 -- low-usage')
  })
})