// Weather API configuration
const WEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY_HERE';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Default location (you can change this)
const DEFAULT_LOCATION = {
    lat: 40.7128,
    lon: -74.0060,
    name: 'New York'
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
    if (WEATHER_API_KEY === 'YOUR_OPENWEATHER_API_KEY_HERE') {
        showWeatherSetupMessage();
        return;
    }

    try {
        const response = await fetch(
            `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
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
    const temperature = Math.round(data.main.temp);
    const weatherCode = data.weather[0].main.toLowerCase();
    
    // Map weather conditions to emojis
    const weatherIcons = {
        'clear': '☀️',
        'clouds': '☁️',
        'rain': '🌧️',
        'drizzle': '🌦️',
        'thunderstorm': '⛈️',
        'snow': '❄️',
        'mist': '🌫️',
        'fog': '🌫️',
        'haze': '🌫️'
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
    document.getElementById('weatherIcon').textContent = '⚙️';
    document.getElementById('temperature').textContent = 'API';
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