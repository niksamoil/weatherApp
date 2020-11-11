const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let now = new Date();
let month = now.getMonth();
let day = now.getDate();

months.map((item, index) => {
    if(month === index) {
        document.querySelector('.main__month').innerHTML = `${item} ${day}`;
    }
});

let mainBg = document.querySelector('.main');



function getData(cityName) {

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7d4bb8c7a065918516f5f0fc52529f8b`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        document.querySelector('.main__city').textContent = data.name;
        document.querySelector('.main__temp-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
        document.querySelector('.main__condition-desc').textContent = data.weather[0]['description'];
        document.querySelector('.main__condition-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.main__wind-value').textContent = data.wind.speed + ' km/h';
        document.querySelector('.main__humidity-value').innerHTML = data.main.humidity + '%';
        document.querySelector('.main__condition-value').innerHTML = data.clouds.all + '%';
        document.querySelector('.main__feel-like').innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 273) + '&deg;C';


        if ( data.weather[0].main == "Clouds") {
            mainBg.style.cssText = `background: url('img/clody-bg.jpg');`;
        } else if ( data.weather[0].main == "Rain" ) {
            mainBg.style.cssText = `background: url('img/rain_1920.jpg');`;
        } else if (data.weather[0].main == "Haze") {
            mainBg.style.cssText = `background: url('img/haze_1920.jpg');`;
        } else if (data.weather[0].main == "Clear") {
            mainBg.style.cssText = `background: url('img/clear-sky1920.jpg');`;
        }
    })
    .catch(function () {
        // catch any errors
    });
}

getData('Chisinau');


document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    let inputValue = document.querySelector('.main__search').value;

    getData(inputValue);

    document.querySelector('.main__search').value = '';

});


document.querySelector('.main__favorite-location').addEventListener('change', () => {

    let selectValue = document.querySelector('.main__favorite-location').value;


    if (selectValue == 'Popular Cities') {

        selectValue = 'Chisinau';
    }

    getData(selectValue);


});




// http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=7d4bb8c7a065918516f5f0fc52529f8b