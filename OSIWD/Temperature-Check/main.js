let isMagicOn = false;
document.getElementById('magic-btn').addEventListener('click', toggleMagic);

function convertTemp() {
}

function clearFields() {
}

const weatherConditions = [
    'clear-sunny', 'partly-cloudy', 'cloudy-overcast', 'foggy', 'hazy',
    'light-rain', 'moderate-rain', 'heavy-rain', 'drizzle', 'showers',
    'thunderstorms', 'light-snow', 'moderate-snow', 'heavy-snow', 'snow-showers',
    'blizzard', 'sleet-ice-pellets', 'freezing-rain', 'hail', 'breezy',
    'windy', 'gusty', 'gale', 'dust-storm-sandstorm', 'tornado',
    'hurricane-typhoon-cyclone'
];
let currentConditionIndex = 0;
let magicInterval;

function updateWeatherCondition() {
    document.body.className = '';
    const weatherCondition = weatherConditions[currentConditionIndex];
    document.body.classList.add(weatherCondition);

    currentConditionIndex = (currentConditionIndex + 1) % weatherConditions.length;
}

function toggleMagic() {
    if (!isMagicOn) {
        magicInterval = setInterval(updateWeatherCondition, 1000);
        document.getElementById('magic-btn').textContent = 'Stop';
    } else {
        clearInterval(magicInterval);
        document.body.className = '';
        document.getElementById('magic-btn').textContent = 'Magic';
    }
    
    isMagicOn = !isMagicOn;
}

document.getElementById('convert-btn').addEventListener('click', convertTemp);
document.getElementById('clear-btn').addEventListener('click', clearFields);

function convertTemp() {
    const tempValue = parseFloat(document.getElementById('temp-input').value);
    const tempUnit = document.getElementById('temp-unit').value;

    if (isNaN(tempValue)) {
        alert('Please enter a valid temperature.');
        return;
    }

    let result;
    switch (tempUnit) {
        case 'C':
            result = `${tempValue}°C is ${(tempValue * 9/5 + 32).toFixed(2)}°F or ${(tempValue + 273.15).toFixed(2)}K`;
            break;
        case 'F':
            result = `${tempValue}°F is ${((tempValue - 32) * 5/9).toFixed(2)}°C or ${((tempValue - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case 'K':
            result = `${tempValue}K is ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)}°F or ${(tempValue - 273.15).toFixed(2)}°C`;
            break;
    }

    document.getElementById('conversion-result').textContent = result;
}

function clearFields() {
    document.getElementById('temp-input').value = '';
    document.getElementById('conversion-result').textContent = '';
}