
  function updateTemperature() {
    $('p#temp-guage-text').text(`${t.temperature}`);
    $('.usage-indicator').attr('id', t.energyUsage());
  }

  function showWeather(city) {
    api_key = "appid=a3d9eb01d4de82b9b8d0849ef604dbed"
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&${api_key}&units=metric`, function(data) {
      temp = data.main.temp
      weather = data.weather[0].main
      $('#city').text(city)
      $('.weather-temp').text(temp)
      $('.weather').text(weather)
      console.log(data);
      })  
    }

$(document).ready(function() {
  showWeather("Los Angeles")
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
      $('.ps-mode').attr('src', "src/svg/009-saving.svg")
    } else {
      $('.ps-mode').attr('src', "src/svg/008-energy-1.svg")
    }
    updateTemperature()
    })

    $('#submit').on('click', function(event) {
      event.preventDefault()
      city = $('#select-city').val()
      console.log(city)
      showWeather(city)
    })
  })