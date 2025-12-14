# Brave New World - Interactive Study Guide

A modern, interactive web-based study guide for Aldous Huxley's dystopian masterpiece *Brave New World*. This project features a stunning dark theme with dynamic content loading and premium design aesthetics.

![Brave New World]

## ✨ Features

- **Dynamic Navigation**: Smooth single-page application with dynamic content loading
- **Modern Design**: Dark theme with purple gradient accents and glassmorphism effects
- **Character Profiles**: Detailed analysis of main characters with visual portraits
- **Responsive Layout**: Fully responsive design that works on all devices
- **Premium Typography**: Beautiful fonts (Playfair Display + Inter) for enhanced readability
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Accessibility**: ARIA labels and semantic HTML for better accessibility

## 🎨 Design Highlights

- **Color Scheme**: Deep dark background (`#0f0f23`) with vibrant purple gradients
- **Glassmorphism**: Semi-transparent cards with backdrop blur effects
- **Smooth Animations**: Fade-in and slide-in animations for content
- **Gradient Text**: Eye-catching gradient headings
- **Hover Effects**: Interactive cards with lift and glow effects

## 📁 Project Structure

```
brave-new-world-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet with modern design
│   └── accessibility.css  # Accessibility features
├── js/
│   └── script.js          # Dynamic content loading logic
├── sections/
│   ├── nav.html           # Navigation menu
│   ├── overview.html      # Book overview section
│   ├── characters.html    # Character analysis
│   ├── themes.html        # Major themes
│   └── references.html    # References and citations
└── images/
    ├── book-cover.jpg
    ├── bernard-marx.jpg
    ├── john-savage.jpg
    ├── lenina-crowne.jpg
    ├── mustapha-mond.jpg
    ├── helmholtz-watson.jpg
    └── character-relationships.png
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server) or any other HTTP server

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brave-new-world-website.git
   cd brave-new-world-website
   ```

2. **Start a local server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx http-server -p 8000
   ```

3. **Open in browser**
   
   Navigate to `http://localhost:8000`

### Why a Local Server?

This project uses dynamic content loading via JavaScript's `fetch()` API, which requires an HTTP server to work properly due to CORS restrictions. Simply opening `index.html` directly in a browser won't work.

## 🎯 Usage

1. **Navigate**: Use the top navigation bar to switch between sections
2. **Explore Characters**: Click on "Characters" to view detailed character profiles
3. **Read Themes**: Discover the major themes explored in the novel
4. **View Overview**: Get a comprehensive overview of the book

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with ARIA accessibility
- **CSS3**: Modern styling with CSS variables, gradients, and animations
- **JavaScript (ES6+)**: Dynamic content loading and event handling
- **Google Fonts**: Playfair Display and Inter typefaces

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Background | `#0f0f23` | Main background |
| Primary Gradient | `#667eea → #764ba2` | Headings, accents |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#b8b8d1` | Secondary text |
| Card Background | `rgba(255,255,255,0.05)` | Card backgrounds |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [@yourhandle](https://twitter.com/yourhandle)

Project Link: [https://github.com/yourusername/brave-new-world-website](https://github.com/yourusername/brave-new-world-website)

## 🙏 Acknowledgments

- Aldous Huxley for the original novel
- Character illustrations and images used in this project
- Google Fonts for the beautiful typography
- The open-source community for inspiration

## 📸 Screenshots


**Note**: This is an educational project created for study purposes. All rights to *Brave New World* belong to the estate of Aldous Huxley.

