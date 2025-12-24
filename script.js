const API_URL = 'https://wttr.in/';

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    fetchWeather(city);
});

async function fetchWeather(city) {
    const weatherInfo = document.getElementById('weather-info');
    const loading = weatherInfo.querySelector('.loading');
    
    // Show loading
    weatherInfo.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Getting weather...</div>';
    
    try {
        const response = await fetch(`${API_URL}${city}?format=j1`);
        if (!response.ok) {
            throw new Error('City not found or API error');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<div class="error"><i class="fas fa-exclamation-triangle"></i> ${error.message}</div>`;
    }
}

function displayWeather(data) {
    const current = data.current_condition[0];
    const location = data.nearest_area[0];
    const name = location.areaName[0].value;
    const temp = current.temp_C;
    const description = current.weatherDesc[0].value;
    const humidity = current.humidity;
    
    // Map weather descriptions to Font Awesome icons
    const iconMap = {
        'Sunny': 'fas fa-sun',
        'Clear': 'fas fa-moon',
        'Partly cloudy': 'fas fa-cloud-sun',
        'Cloudy': 'fas fa-cloud',
        'Overcast': 'fas fa-cloud',
        'Mist': 'fas fa-smog',
        'Fog': 'fas fa-smog',
        'Light rain': 'fas fa-cloud-rain',
        'Moderate rain': 'fas fa-cloud-rain',
        'Heavy rain': 'fas fa-cloud-showers-heavy',
        'Light snow': 'fas fa-snowflake',
        'Moderate snow': 'fas fa-snowflake',
        'Heavy snow': 'fas fa-snowflake',
        'Thunderstorm': 'fas fa-bolt',
        'default': 'fas fa-cloud'
    };
    
    const weatherIcon = iconMap[description] || iconMap['default'];
    
    document.getElementById('weather-info').innerHTML = `
        <div class="weather-data">
            <h2><i class="${weatherIcon}"></i> ${name}</h2>
            <div class="weather-details">
                <div class="detail">
                    <i class="fas fa-thermometer-half"></i>
                    <p>Temperature</p>
                    <span>${temp}°C</span>
                </div>
                <div class="detail">
                    <i class="${weatherIcon}"></i>
                    <p>Condition</p>
                    <span>${description}</span>
                </div>
                <div class="detail">
                    <i class="fas fa-tint"></i>
                    <p>Humidity</p>
                    <span>${humidity}%</span>
                </div>
                <div class="detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Location</p>
                    <span>${name}</span>
                </div>
            </div>
        </div>
    `;
}