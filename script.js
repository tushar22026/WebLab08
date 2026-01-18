document.addEventListener('DOMContentLoaded', () => {

    // 1. Accessing local JSON file
    const loadJsonButton = document.getElementById('load-json');
    const jsonOutput = document.getElementById('json-output');

    loadJsonButton.addEventListener('click', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                jsonOutput.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                jsonOutput.textContent = `Error loading JSON: ${error}`;
            });
    });

    // 4. JS code that shows JSON of API's and 5. Web page functionality
    
    // Email Reputation
    const checkEmailButton = document.getElementById('check-email');
    const emailInput = document.getElementById('email-input');
    const emailOutput = document.getElementById('email-output');

    checkEmailButton.addEventListener('click', () => {
        const email = emailInput.value;
        // IMPORTANT: Replace with your actual Email Reputation API key and endpoint.
        // This example uses IPQualityScore, but you can use any service.
        const emailApiKey = 'YOUR_EMAIL_API_KEY'; 
        const emailApiUrl = `https://www.ipqualityscore.com/api/json/email/${emailApiKey}/${email}`;

        if (!email) {
            emailOutput.textContent = 'Please enter an email address.';
            return;
        }

        emailOutput.textContent = 'Checking...';
        fetch(emailApiUrl)
            .then(response => response.json())
            .then(data => {
                emailOutput.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                emailOutput.textContent = `Error: ${error}`;
            });
    });

    // Weather API
    const getWeatherButton = document.getElementById('get-weather');
    const cityInput = document.getElementById('city-input');
    const weatherOutput = document.getElementById('weather-output');

    // Set default city to Dhaka and fetch weather on load
    cityInput.value = 'Dhaka';
    getWeatherButton.click(); // Trigger click to load Dhaka's weather initially

    getWeatherButton.addEventListener('click', () => {
        const city = cityInput.value;
        // IMPORTANT: Replace with your actual WeatherAPI.com API key.
        const weatherApiKey = '96a756ce78be4b128f0102254261601';
        const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`;

        if (!city) {
            weatherOutput.textContent = 'Please enter a city.';
            return;
        }

        weatherOutput.textContent = 'Fetching weather...';
        fetch(weatherApiUrl)
            .then(response => response.json())
            .then(data => {
                weatherOutput.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                weatherOutput.textContent = `Error: ${error}`;
            });
    });
});
