# Modern Start Page

A sleek, minimalist browser start page with customizable shortcuts and live weather. Built for GitHub Pages with a dark, modern aesthetic.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)
![Open-Meteo](https://img.shields.io/badge/Open--Meteo-Weather%20API-orange?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Design-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

![Start Page Preview](https://via.placeholder.com/800x400/0a0a0a/ffffff?text=Modern+Start+Page+Preview)

## Features

- **🎨 Modern Dark Design** - Sophisticated gradient background with glass-morphism effects
- **📱 Fully Responsive** - Adapts beautifully from desktop to mobile
- **🌤️ Live Weather** - Simple weather display with emoji icons
- **⚡ Fast & Lightweight** - Pure HTML, CSS, and JavaScript
- **🔧 Easy Customization** - Modify shortcuts, colors, and layout with ease
- **🚀 GitHub Pages Ready** - Deploy instantly to GitHub Pages

## Quick Start

1. **Fork this repository** or download the files
2. **Add your profile picture** as `assets/profile.png` (120x120px recommended)
3. **Deploy to GitHub Pages** via repository settings

**That's it!** No API keys needed - the weather service is completely free.

## Customization

### Shortcuts

Edit the shortcuts in `index.html`. Each button follows this structure:

```html
<a href="https://example.com" class="shortcut-btn" data-name="Site Name">
    <div class="shortcut-icon">
        <!-- SVG icon here -->
    </div>
    <span class="shortcut-label">Site Name</span>
</a>
```

### Weather Location

The weather widget automatically detects your location. To set a default location, modify `DEFAULT_LOCATION` in `script.js`:

```javascript
const DEFAULT_LOCATION = {
    lat: 41.141,
    lon: -81.4768,
    name: 'Cleveland'
};
```

### Colors & Styling

Key CSS variables for easy customization:

- Background gradient: Modify the `background` property in `body`
- Glass effects: Adjust `rgba(255, 255, 255, 0.05)` values
- Button hover effects: Update `.shortcut-btn:hover` styles

## File Structure

```
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # All styling and responsive design
├── ⚡ script.js           # Weather API and interactions
├── 🖼️ assets/profile.png     # Your profile picture (add this)
└── 📖 README.md          # This file
```

## Weather API

![Open-Meteo](https://img.shields.io/badge/API-Open--Meteo-orange?style=flat-square)

This project uses [Open-Meteo](https://open-meteo.com/), a free weather API that requires **no API key or registration**!

**Features:**
- ✅ Completely free, no limits
- ✅ No API key required  
- ✅ Accurate weather data
- ✅ Global coverage
- ✅ Fast response times

The weather automatically detects your location or uses the default coordinates you set in `script.js`.

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=googlechrome&logoColor=white) | 60+ | ✅ Supported |
| ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=firefox&logoColor=white) | 55+ | ✅ Supported |
| ![Safari](https://img.shields.io/badge/Safari-000000?style=flat-square&logo=safari&logoColor=white) | 12+ | ✅ Supported |
| ![Edge](https://img.shields.io/badge/Edge-0078D4?style=flat-square&logo=microsoftedge&logoColor=white) | 79+ | ✅ Supported |

## Responsive Breakpoints

| Device | Layout | Breakpoint |
|--------|--------|------------|
| 🖥️ **Desktop** | 6×2 grid layout | Default |
| 📱 **Tablet** | 3×4 grid layout | ≤ 768px |
| 📱 **Mobile** | 2×6 grid layout | ≤ 480px |

## Contributing

Found a bug or want to add a feature? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Inspiration & Credits

- Icons from various sources (GitHub, YouTube, etc. - replace with your preferred icon set)
- Weather data from [OpenWeatherMap](https://openweathermap.org)
- Glass-morphism design inspired by modern UI trends

---

**Made with ❤️ for a better browsing experience**

[⭐ Star this repo](../../stargazers) if you found it useful!