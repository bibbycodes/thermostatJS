
  function updateTemperature() {
    $('#temp-guage-text').text(t.temperature);
    $('.usage-indicator').attr('id', t.energyUsage());
  }

$(document).ready(function() {
  t = new Thermostat()
  updateTemperature()
  $('#power-saving').text(`Power Saving: ${t.returnValForPowerSaving()}`)

  $('#up').on('click', () => {
    t.up(1)
    // $('p#temp-guage-text').text(t.temperature)
    updateTemperature()
  })

  $('#down').on('click', () => {
    t.down(1)
    updateTemperature()
  })

  $('#reset').on('click', () => {
    t.reset()
    updateTemperature()
  })

  $('#power-saving').on('click', () => {
    t.togglePowerSaving()
    $('#power-saving').text(`Power Saving: ${t.returnValForPowerSaving()}`)
    updateTemperature()
  })
})