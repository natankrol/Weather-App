const input = document.querySelector('.city-input');
const submitBtn = document.querySelector('.submit-btn');
const cityInfo = document.querySelector('.city-info');
const tempInfo = document.querySelector('.temp-info');
const windInfo = document.querySelector('.wind-info');
const desc = document.querySelector('.description');

apikey = '548586713d275e07b23b2cd5209a7c4b'


submitBtn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey+'&units=metric')
    .then(res => res.json())
    .then(data => {
        let cityName = data['name'];
        let temperature = Math.round(data['main']['temp'] * 10) / 10;
        let windspeed = Math.round(data['wind']['speed'] * 3.6 * 10) / 10;
        let description = data['weather']['0']['description'];
        let descCapital = description.charAt(0).toUpperCase() + description.slice(1);

        cityInfo.innerHTML = `City: ${cityName}`;
        tempInfo.innerHTML = `Temperature: ${temperature} °C`;
        windInfo.innerHTML = `Wind speed: ${windspeed} km/h`;
        desc.innerHTML = `Description: ${descCapital}`;
    })
    input.value = ''
})

