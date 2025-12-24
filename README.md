# Weather App

A modern, responsive Progressive Web App (PWA) that fetches and displays weather information for any city using the wttr.in API.

## Features

- Real-time weather data (temperature, conditions, humidity)
- Modern glassmorphism design with animations
- Responsive design for all devices
- Installable as a PWA on mobile and desktop
- Offline-capable with service worker caching
- Font Awesome weather icons

## Setup

No setup required - the API is free and doesn't need a key. Just open `index.html` in a web browser.

## Running Locally

Simply open `index.html` in your web browser. No server required for basic functionality.

For development with live reload:
- Python: `python -m http.server 8000`
- Node.js: Install `live-server` and run `live-server`

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code: `git add . && git commit -m "Deploy" && git push origin main`
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Your app will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder
3. Your app will be deployed instantly with a custom URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload the folder
3. Deploy with one click

## PWA Features

This app is a Progressive Web App that can be installed on devices:
- **Android**: Chrome menu > "Add to Home screen"
- **iOS**: Safari share button > "Add to Home screen"
- **Desktop**: Chrome/Edge address bar > "Install app"

The service worker provides offline caching for faster loading and basic offline functionality.

## API Used

- **wttr.in**: Free weather API with no API key required
- **Format**: JSON format (`?format=j1`)
- **Units**: Celsius

## Technologies

- HTML5
- CSS3 (Modern features: CSS Grid, Flexbox, Animations, Backdrop-filter)
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins)