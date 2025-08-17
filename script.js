// Weather API configuration - using Open-Meteo (no API key required!)
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

// Default location (you can change this)
const DEFAULT_LOCATION = {
    lat: 41.141,
    lon: -81.4768,
    name: 'Cleveland' // You can update this to your city name
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeWeather();
    addProfilePictureHandler();
});

// Weather functionality
async function initializeWeather() {
    try {
        // Try to get user's location first
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetchWeatherByCoords(lat, lon);
                },
                error => {
                    console.log('Geolocation error:', error);
                    // Fall back to default location
                    fetchWeatherByCoords(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon);
                }
            );
        } else {
            // Geolocation not supported, use default location
            fetchWeatherByCoords(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon);
        }
    } catch (error) {
        console.error('Weather initialization error:', error);
        showWeatherError();
    }
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto&temperature_unit=fahrenheit`
        );
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        console.error('Weather fetch error:', error);
        showWeatherError();
    }
}

function updateWeatherDisplay(data) {
    const temperature = Math.round(data.current.temperature_2m);
    const weatherCode = data.current.weather_code;
    
    // Map Open-Meteo weather codes to emojis
    // Reference: https://open-meteo.com/en/docs
    const weatherIcons = {
        0: '☀️',      // Clear sky
        1: '🌤️',      // Mainly clear
        2: '⛅',      // Partly cloudy
        3: '☁️',      // Overcast
        45: '🌫️',     // Fog
        48: '🌫️',     // Depositing rime fog
        51: '🌦️',     // Drizzle: Light
        53: '🌦️',     // Drizzle: Moderate
        55: '🌦️',     // Drizzle: Dense
        56: '🌧️',     // Freezing drizzle: Light
        57: '🌧️',     // Freezing drizzle: Dense
        61: '🌧️',     // Rain: Slight
        63: '🌧️',     // Rain: Moderate
        65: '🌧️',     // Rain: Heavy
        66: '🌧️',     // Freezing rain: Light
        67: '🌧️',     // Freezing rain: Heavy
        71: '❄️',     // Snow fall: Slight
        73: '❄️',     // Snow fall: Moderate
        75: '❄️',     // Snow fall: Heavy
        77: '❄️',     // Snow grains
        80: '🌦️',     // Rain showers: Slight
        81: '🌧️',     // Rain showers: Moderate
        82: '🌧️',     // Rain showers: Violent
        85: '🌨️',     // Snow showers: Slight
        86: '🌨️',     // Snow showers: Heavy
        95: '⛈️',     // Thunderstorm: Slight or moderate
        96: '⛈️',     // Thunderstorm with slight hail
        99: '⛈️'      // Thunderstorm with heavy hail
    };
    
    const icon = weatherIcons[weatherCode] || '🌤️';
    
    document.getElementById('weatherIcon').textContent = icon;
    document.getElementById('temperature').textContent = `${temperature}°`;
}

function showWeatherError() {
    document.getElementById('weatherIcon').textContent = '❓';
    document.getElementById('temperature').textContent = '--°';
}

function showWeatherSetupMessage() {
    document.getElementById('weatherIcon').textContent = '✅';
    document.getElementById('temperature').textContent = 'Ready';
}

// Profile picture functionality
function addProfilePictureHandler() {
    const profilePic = document.getElementById('profilePic');
    
    // Handle broken image gracefully
    profilePic.addEventListener('error', function() {
        // Create a placeholder if the image fails to load
        this.style.background = 'linear-gradient(45deg, #64b5f6, #42a5f5)';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '2rem';
        this.style.fontWeight = 'bold';
        this.innerHTML = '👤';
        this.removeAttribute('src');
    });
    
    // Optional: Add click handler for profile picture
    profilePic.addEventListener('click', function() {
        // You can add functionality here, like opening a file picker
        console.log('Profile picture clicked');
    });
}

// Keyboard shortcuts (optional enhancement)
document.addEventListener('keydown', function(event) {
    // Press 'r' to refresh weather
    if (event.key.toLowerCase() === 'r' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        initializeWeather();
    }
});

// Add some visual feedback for button interactions
document.querySelectorAll('.shortcut-btn').forEach(btn => {
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-1px) scale(0.98)';
    });
    
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});