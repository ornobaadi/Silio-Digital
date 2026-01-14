# Silio Digital Portfolio 🚀

A modern, secure, and high-performance digital agency portfolio website built with React, Vite, and TailwindCSS.

## ✨ Features

### 🎨 Modern Design
- Sleek dark mode interface with vibrant gradients
- Smooth animations powered by Framer Motion and GSAP
- Responsive design that works on all devices
- Premium UI/UX with glassmorphism effects

### 🔒 Security Features
- Input sanitization to prevent XSS attacks
- Form validation with comprehensive error handling
- Client-side rate limiting to prevent spam
- Security headers implementation
- Environment variables for sensitive data
- Content Security Policy ready

### 🌐 SEO & PWA
- Comprehensive meta tags for SEO
- Open Graph tags for social media sharing
- Twitter Card integration
- PWA support with manifest (installable)
- Semantic HTML for better accessibility
- Structured data ready

### ⚡ Performance
- Code splitting and lazy loading
- Optimized build process with Vite
- Fast page loads
- Efficient state management

### 📱 Contact Features
- WhatsApp integration for instant contact
- Form validation with real-time feedback
- Loading states and success/error messages
- Rate limiting to prevent spam
- Sanitized inputs for security

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 4 + DaisyUI
- **Animations:** Framer Motion, GSAP, Lottie
- **Routing:** React Router DOM 7
- **Icons:** Lucide React, React Icons
- **Form Handling:** Custom validation with security utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Silio-Digital-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the values with your actual information:
   ```env
   VITE_CONTACT_EMAIL=israkparvez@gmail.com
   VITE_CONTACT_PHONE=+8801646846514
   VITE_WHATSAPP_NUMBER=+8801646846514
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Contact Information
VITE_CONTACT_EMAIL=your-email@example.com
VITE_CONTACT_PHONE=+1234567890
VITE_WHATSAPP_NUMBER=+1234567890

# Social Media Links
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_INSTAGRAM_URL=https://instagram.com/yourprofile
VITE_TWITTER_URL=https://twitter.com/yourprofile

# Company Information
VITE_COMPANY_NAME=Your Company Name
VITE_COMPANY_ADDRESS=Your Address
```

**⚠️ Important:** Never commit the `.env` file to version control. It's already in `.gitignore`.

## 🏗️ Project Structure

```
silio-digital-portfolio/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── triangle-512.png       # App icon
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── ErrorBoundary.jsx  # Error handling component
│   ├── layout/
│   │   └── MainLayout.jsx     # Main app layout
│   ├── lib/
│   │   ├── utils.js           # Utility functions
│   │   └── security.js        # Security utilities
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx
│   │       ├── Banner.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── Contact.jsx    # Contact form with validation
│   │       └── CTA.jsx
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                        # Environment variables (not in git)
├── .env.example                # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔐 Security Best Practices

This project implements several security measures:

1. **Input Sanitization**: All user inputs are sanitized to prevent XSS attacks
2. **Rate Limiting**: Client-side rate limiting prevents spam submissions
3. **Form Validation**: Comprehensive validation for all form fields
4. **Environment Variables**: Sensitive data stored in environment variables
5. **Security Headers**: Meta tags for security headers (X-Frame-Options, CSP, etc.)
6. **Error Boundaries**: Graceful error handling to prevent app crashes

## 📈 Performance Optimization

- **Code Splitting**: Routes are lazy-loaded for faster initial load
- **Optimized Images**: All images should be optimized before deployment
- **Minification**: Production builds are automatically minified
- **Caching**: Proper cache headers for static assets

## 🌐 Deployment

### Firebase Hosting (Current Setup)

```bash
npm run build
firebase deploy
```

### Other Platforms

The built files in the `dist` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 🧪 Testing

```bash
# Run linter
npm run lint
```

## 📝 To-Do / Future Improvements

- [ ] Add unit tests (Jest/Vitest)
- [ ] Add E2E tests (Playwright/Cypress)
- [ ] Implement TypeScript
- [ ] Add blog functionality
- [ ] Add portfolio showcase section
- [ ] Implement dark/light mode toggle
- [ ] Add i18n support for multiple languages
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Implement service worker for offline support
- [ ] Add image optimization pipeline
- [ ] Add sitemap generation
- [ ] Implement robots.txt

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📧 Contact

For inquiries, please contact:
- **Email:** israkparvez@gmail.com
- **Phone:** +880 1646 846514
- **WhatsApp:** [Click to chat](https://wa.me/+8801646846514)

## 🙏 Acknowledgments

- React Team for an amazing framework
- Vite for blazing fast build tool
- TailwindCSS for utility-first CSS
- Framer Motion for beautiful animations
- All other open-source contributors

---

**Built with ❤️ by Silio Digital**
