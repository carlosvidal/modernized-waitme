# Modernized-WaitMe.js

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Modernized-WaitMe.js is a lightweight, customizable loading spinner and progress bar library for web applications. It provides an easy way to show loading states with various animations.

## Features

- Multiple animation effects
- Customizable colors and sizes
- No dependencies
- Easy to integrate
- Responsive design

## Installation

You can include WaitMe.js in your project using one of the following methods:

### 1. Direct download

Download the `waitMe.js` and `waitMe.css` files from this repository and include them in your HTML:

```html
<link rel="stylesheet" href="path/to/waitMe.css">
<script src="path/to/waitMe.js"></script>
```

### 2. npm

```bash
npm install waitme-js
```

Then import it in your JavaScript:

```javascript
import WaitMe from 'waitme-js';
```

## Usage

Here's a basic example of how to use WaitMe.js:

```javascript
// Create a new WaitMe instance
const waitMe = new WaitMe('#elementId', {
    effect: 'bounce',
    text: 'Please wait...',
    bg: 'rgba(255,255,255,0.7)',
    color: '#000',
    maxSize: '',
    waitTime: -1,
    textPos: 'vertical',
    fontSize: '',
    source: '',
    onClose: function() {}
});

// To hide the WaitMe
waitMe.hide();
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| effect | string | 'bounce' | Animation effect ('bounce', 'rotateplane', 'stretch', 'orbit', 'roundBounce', 'win8', 'win8_linear', 'ios', 'facebook', 'rotation', 'timer', 'pulse', 'progressBar', 'bouncePulse') |
| text | string | '' | Text to display |
| bg | string | 'rgba(255,255,255,0.7)' | Background color |
| color | string | '#000' | Color of the animation elements |
| maxSize | string | '' | Maximum size of the animation (e.g., '120px') |
| waitTime | number | -1 | Time to auto-hide the animation (-1 for no auto-hide) |
| textPos | string | 'vertical' | Position of the text ('vertical' or 'horizontal') |
| fontSize | string | '' | Font size of the text |
| source | string | '' | Source URL for image (when effect is 'img') |
| onClose | function | function(){} | Callback function when WaitMe is closed |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the original jQuery [waitMe plugin](https://github.com/vadimsva/waitMe)
- Modernized and adapted for use without jQuery

# WaitMe.js

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

WaitMe.js is a lightweight, customizable loading spinner and progress bar library for web applications. It provides an easy way to show loading states with various animations.

## Demo

Check out the live demo: [WaitMe.js Demo](https://carlosvidal.github.io/modernized-waitme/)

## Features

- Multiple animation effects
- Customizable colors and sizes
- No dependencies
- Easy to integrate
- Responsive design

## Installation

You can include WaitMe.js in your project using one of the following methods:

### 1. Direct download

Download the `waitMe.js` and `waitMe.css` files from this repository and include them in your HTML:

```html
<link rel="stylesheet" href="path/to/waitMe.css">
<script src="path/to/waitMe.js"></script>
```

### 2. npm

```bash
npm install waitme-js
```

Then import it in your JavaScript:

```javascript
import WaitMe from 'waitme-js';
```

## Usage

Here's a basic example of how to use WaitMe.js:

```javascript
// Create a new WaitMe instance
const waitMe = new WaitMe('#elementId', {
    effect: 'bounce',
    text: 'Please wait...',
    bg: 'rgba(255,255,255,0.7)',
    color: '#000',
    maxSize: '',
    waitTime: -1,
    textPos: 'vertical',
    fontSize: '',
    source: '',
    onC