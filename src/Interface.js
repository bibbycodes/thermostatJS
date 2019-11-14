$(document).ready(() => {
  t = new Thermostat()

  $('p#temp-guage-text').text(t.temperature)

  $('#up').on('click', () => {
    t.up(1)
    $('p#temp-guage-text').text(t.temperature)
  })

  $('#down').on('click', () => {
    t.down(1)
    $('p#temp-guage-text').text(t.temperature)
  })

  $('#reset').on('click', () => {
    t.reset()
    $('p#temp-guage-text').text(t.temperature)
  })
})