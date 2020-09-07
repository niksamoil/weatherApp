let now = new Date();
let month = now.getMonth();
let day = now.getDate();

if (month == 0 ) {
    document.querySelector('.main__month').innerHTML = 'January' + " " + day;
} else if (month == 1) {
    document.querySelector('.main__month').innerHTML = 'February' + " " + day;
} else if (month == 2) {
    document.querySelector('.main__month').innerHTML = 'March' + " " + day;
} else if (month == 3) {
    document.querySelector('.main__month').innerHTML = 'April' + " " + day;
} else if (month == 4) {
    document.querySelector('.main__month').innerHTML = 'May' + " " + day;
} else if (month == 5) {
    document.querySelector('.main__month').innerHTML = 'June' + " " + day;
} else if (month == 6) {
    document.querySelector('.main__month').innerHTML = 'July' + " " + day;
} else if (month == 7) {
    document.querySelector('.main__month').innerHTML = 'August' + " " + day;
} else if (month == 8) {
    document.querySelector('.main__month').innerHTML = 'September' + " " + day;
} else if (month == 9) {
    document.querySelector('.main__month').innerHTML = 'October' + " " + day;
} else if (month == 10) {
    document.querySelector('.main__month').innerHTML = 'November' + " " + day;
} else if (month == 11) {
    document.querySelector('.main__month').innerHTML = 'December' + " " + day;
}



document.querySelector('.btn').onclick = () => {
    let inputValue = document.querySelector('.main__search').value;
    let mainBg = document.querySelector('.main');


   
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=7d4bb8c7a065918516f5f0fc52529f8b`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.main__city').textContent = data.name;
        document.querySelector('.main__temp-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
        document.querySelector('.main__condition-desc').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.main__condition-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.main__wind-value').textContent = data.wind.speed + ' km/h';
        document.querySelector('.main__humidity-value').innerHTML = data.main.humidity + '%';
        document.querySelector('.main__condition-value').innerHTML = data.clouds.all + '%';
        document.querySelector('.main__feel-like').innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 273) + '&deg;C';

        console.log(data.weather[0].main);
        if ( data.weather[0].main == "Clouds") {
            mainBg.style.cssText = `background: url('img/clody-bg.jpg'); 
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if ( data.weather[0].main == "Rain" ) {
            mainBg.style.cssText = `background: url('img/rain_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Haze") {
            mainBg.style.cssText = `background: url('img/haze_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Clear") {
            mainBg.style.cssText = `background: url('img/clear-sky1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        }

    })
    .catch(function () {
        // catch any errors
    });
    // console.dir(document.querySelector('.main__search'));
    document.querySelector('.main__search').value = '';
}

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=7d4bb8c7a065918516f5f0fc52529f8b`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.main__city').textContent = data.name;
        document.querySelector('.main__temp-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
        document.querySelector('.main__condition-desc').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.main__condition-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.main__wind-value').textContent = data.wind.speed + ' km/h';
        document.querySelector('.main__humidity-value').innerHTML = data.main.humidity + '%';
        document.querySelector('.main__condition-value').innerHTML = data.clouds.all + '%';
        document.querySelector('.main__feel-like').innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 273) + '&deg;C';

        let mainBg = document.querySelector('.main');
        if ( data.weather[0].main == "Clouds") {
            mainBg.style.cssText = `background: url('img/clody-bg.jpg'); 
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if ( data.weather[0].main == "Rain" ) {
            mainBg.style.cssText = `background: url('img/rain_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Haze") {
            mainBg.style.cssText = `background: url('img/haze_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Clear") {
            mainBg.style.cssText = `background: url('img/clear-sky1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        }
    })
    .catch(function () {
        // catch any errors
    });



document.querySelector('.main__favorite-location').onchange = () => {
    let selectValue = document.querySelector('.main__favorite-location').value;
    let mainBg = document.querySelector('.main');
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectValue}&appid=7d4bb8c7a065918516f5f0fc52529f8b`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.main__city').textContent = data.name;
        document.querySelector('.main__temp-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
        document.querySelector('.main__condition-desc').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.main__condition-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.main__wind-value').textContent = data.wind.speed + ' km/h';
        document.querySelector('.main__humidity-value').innerHTML = data.main.humidity + '%';
        document.querySelector('.main__condition-value').innerHTML = data.clouds.all + '%';
        document.querySelector('.main__feel-like').innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 273) + '&deg;C';
        if ( data.weather[0].main == "Clouds") {
            mainBg.style.cssText = `background: url('img/clody-bg.jpg'); 
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if ( data.weather[0].main == "Rain" ) {
            mainBg.style.cssText = `background: url('img/rain_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Haze") {
            mainBg.style.cssText = `background: url('img/haze_1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        } else if (data.weather[0].main == "Clear") {
            mainBg.style.cssText = `background: url('img/clear-sky1920.jpg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: cover;`;
        }
    })
    .catch(function () {
        // catch any errors
    });
    if (selectValue == 'Popular Cities') {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=7d4bb8c7a065918516f5f0fc52529f8b`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.main__city').textContent = data.name;
            document.querySelector('.main__temp-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;C';
            document.querySelector('.main__condition-desc').textContent = data.weather[0]['description'];
            //https://openweathermap.org/img/wn/02d@2x.png
            document.querySelector('.main__condition-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.main__wind-value').textContent = data.wind.speed + ' km/h';
            document.querySelector('.main__humidity-value').innerHTML = data.main.humidity + '%';
            document.querySelector('.main__condition-value').innerHTML = data.clouds.all + '%';
            document.querySelector('.main__feel-like').innerHTML = 'Feels like ' + Math.round(data.main.feels_like - 273) + '&deg;C';
            let mainBg = document.querySelector('.main');
            if ( data.weather[0].main == "Clouds") {
                mainBg.style.cssText = `background: url('img/clody-bg.jpg'); 
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    background-size: cover;`;
            } else if ( data.weather[0].main == "Rain" ) {
                mainBg.style.cssText = `background: url('img/rain_1920.jpg');
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    background-size: cover;`;
            } else if (data.weather[0].main == "Haze") {
                mainBg.style.cssText = `background: url('img/haze_1920.jpg');
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    background-size: cover;`;
            } else if (data.weather[0].main == "Clear") {
                mainBg.style.cssText = `background: url('img/clear-sky1920.jpg');
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    background-size: cover;`;
            }
        })
        .catch(function () {
            // catch any errors
        });
    }
}        
    


// http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=7d4bb8c7a065918516f5f0fc52529f8b