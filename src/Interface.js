
  function updateTemperature() {
    $('p#temp-guage-text').text(`${t.temperature}`);
    $('.usage-indicator').attr('id', t.energyUsage());
  }

$(document).ready(function() {
  t = new Thermostat()
  updateTemperature()
  $('#power-saving').text(`Power Saving: ${t.returnValForPowerSaving()}`)

  $('#plus').on('click', () => {
    t.up(1)
    // $('p#temp-guage-text').text(t.temperature)
    updateTemperature()
  })

  $('#minus').on('click', () => {
    t.down(1)
    updateTemperature()
  })

  $('.reset-btn').on('click', () => {
    t.reset()
    updateTemperature()
  })

  $('#ps-mode').on('click', () => {
    t.togglePowerSaving()
    if (t.isPowerSavingOn) {
      $('.ps-mode').attr('src', "src/svg/008-energy-1.svg")
    } else {
      $('.ps-mode').attr('src', "src/svg/009-saving.svg")
    }
    updateTemperature()
  })
})