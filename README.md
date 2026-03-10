
## Cipher MT5 Gateway Landing Page

Landing page for [Cipher MT5 Gateway](https://github.com/KAPKEPOT/CMG) - The self-hosted MetaTrader 5 API gateway that saves millions on MetaAPI fees.

#### 🚀 Quick Start

 **Install dependencies**
```
npm install
```

 **Run development server**
 ```
npm run dev
```

**Build for production**
```
npm run build
```

**Export static site**
```
npm run export
```

#### 📁 Project Structure

```
├── components/          # React components
│   ├── Hero.js
│   ├── Features.js
│   ├── ComparisonTable.js
│   ├── CTASection.js
│   └── Footer.js
├── pages/               # Next.js pages
│   ├── index.js        # Homepage
│   ├── docs.js         # Documentation
│   ├── pricing.js      # Pricing
│   └── api/
│       └── github.js   # GitHub API proxy
├── public/             # Static assets
│   ├── og-image.png
│   ├── favicon.ico
│   └── demo.gif
├── styles/             # Global styles
│   └── globals.css
└── package.json        # Dependencies
```

#### 🎨 Design

- Built with Tailwind CSs
- Fully responsive
- Dark theme optimized for readability
- Interactive components with hover effects
- Animated gradients and floating elements

#### 📱 Pages

- Home - Hero section with stats, features grid, cost comparison, ROI calculator
- Documentation - Comprehensive docs with quick links and examples
- Pricing - Plan comparison with interactive tables

#### 🔧 Configuration

**Create a .env.local file:**

```env
GITHUB_TOKEN=your_github_token # Optional, for higher API rate limits
```

#### 🚢 Deployment

Deploy to Vercel

```bash
npm run deploy
```

**Deploy to Netlify**

```bash
npm run build
# Upload the `out` directory to Netlify
```


## ** Final Steps - Run the Project**

`
**Install dependencies**
```
npm install
```
**Run development server**
```
npm run dev
```

**Open browser**
```
open http://localhost:3000
```
