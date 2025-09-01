# Changelog

All notable changes to Cosmic UI Lite will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-09-01

### Added
- **CI/CD Workflow**: Added comprehensive GitHub Actions CI with Node.js 18.x and 20.x testing
- **Build Validation**: Automated verification of all distribution formats (ESM, CJS, UMD, types, CSS)
- **Bundle Size Monitoring**: Quality gates for build output size tracking
- **Live Demo Link**: Prominent live demo link in README for enhanced discoverability

### Improved
- **Demo Layout**: Optimized demo page layout by removing excessive padding from cards
- **Visual Presentation**: Enhanced card height and spacing for better appearance
- **GitHub Pages Integration**: Fixed deployment status monitoring with dedicated badge
- **Documentation Links**: Fixed broken wiki links in README badges

### Fixed
- **SVG References**: Converted external SVG references to code-based generation for consistency
- **Badge Links**: Updated badges to reference existing documentation pages
- **Demo Styling**: Resolved card height issues that made tall modals/cards look poor

### Documentation
- **Reference Materials**: Added original SVG files to `references/svg/` for historical context
- **Wiki Integration**: Fixed Game Ready badge to point to Complete Examples page
- **Build Pipeline**: Isolated reference materials from build process

## [1.0.0] - 2025-08-31

### Added
- **Initial release** of Cosmic UI Lite component library
- **Motivation**: Created as a lightweight alternative to [rizkimuhammada/cosmic-ui](https://github.com/rizkimuhammada/cosmic-ui) for vanilla JavaScript/TypeScript projects
- **Core Components**:
  - `CosmicButton` - Animated buttons with 4 variants (default, primary, secondary, danger)
  - `CosmicModal` - Full-featured modals with backdrop blur and button support
  - `CosmicCard` - Content cards with cosmic borders and hover effects
  - `CosmicInfo` - Overlay popups with 5 customizable title colors
  - `CosmicTag` - Location tags with flip animations and auto-dismiss
- **SVG-Based Rendering**: Scalable vector graphics with angled corners and animated borders
- **Animation System**: 
  - Particle flash effects for backgrounds
  - Cosmic pulse animations for borders
  - Hover transformations and glow effects
  - Smooth slide-in modals and fade transitions
- **Responsive Design**: 4 breakpoints with automatic scaling (desktop, tablet, mobile, small)
- **TypeScript Support**: Comprehensive type definitions and interfaces
- **Demo System**: Interactive testing utilities with `createCosmicDemo()`
- **Modular Architecture**: Shared SVG utilities and consolidated CSS classes

### Architecture & Build System
- **Modern Build Pipeline**: Rollup-based build with multiple output formats
  - ES Module (`dist/index.esm.js`) for modern bundlers
  - CommonJS (`dist/index.cjs.js`) for Node.js compatibility
  - UMD (`dist/index.umd.js`) for browser script tags
- **TypeScript Support**: Complete type definitions with `dist/index.d.ts`
- **Modular Structure**: Organized codebase with separate utility modules
  - `src/components/` - Individual component classes
  - `src/utils/svg.ts` - SVG creation utilities
  - `src/utils/gradients.ts` - Gradient definitions
- **Code-Based SVG System**: All graphics generated programmatically
  - Fixes broken external file references
  - Maintains zero-dependency principle
  - Includes close icon generation (`createCloseIcon()`)

### Technical Features
- **Zero Dependencies**: Pure TypeScript/JavaScript implementation
- **CSS Processing**: PostCSS with minification and autoprefixer
- **SVG Optimization**: Reusable path definitions and viewBox standards
- **Tree Shaking**: Support for importing individual components
- **Browser Compatibility**: Modern ES2020 with broad browser support

### Documentation
- **Comprehensive Wiki**: 6 major documentation pages (3,648+ lines)
  - [Installation & Setup](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Installation-&-Setup) - Complete setup guide with framework integrations
  - [Component Reference](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Component-Reference) - Full API documentation with examples
  - [Complete Examples](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Complete-Examples) - Real-world implementations (spaceship dashboard, game menu)
  - [Troubleshooting](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Troubleshooting) - Debug tools and problem solutions
  - [Architecture Overview](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Architecture-Overview) - Deep technical dive
- **Local Documentation**: Source files in `docs/wiki/` for offline editing
- **Game Engine Integration**: Examples for Phaser 3, PixiJS, Unity WebGL
- **Framework Integration**: Vanilla JS, TypeScript, Webpack, Vite examples

### Credits
- **Inspiration**: [cosmic-ui](https://github.com/rizkimuhammada/cosmic-ui) by rizkimuhammada - original React-based cosmic UI library
- **SVG Graphics**: "HUD futuristic frame" by luqman firdau @ Vecteezy.com
- **Design Philosophy**: Sci-fi and space-themed interfaces
- **Built for**: Planet Blue Invasion game project and vanilla JS/TS applications

### Package Structure
```
cosmic-ui-lite/
├── src/                           # Source code
│   ├── index.ts                   # Main entry point
│   ├── components/                # Individual component classes
│   │   ├── CosmicButton.ts
│   │   ├── CosmicModal.ts
│   │   ├── CosmicCard.ts
│   │   ├── CosmicInfo.ts
│   │   └── CosmicTag.ts
│   ├── utils/                     # Shared utilities
│   │   ├── svg.ts                 # SVG creation helpers
│   │   └── gradients.ts           # Gradient definitions
│   ├── types/                     # TypeScript definitions
│   │   └── index.ts
│   ├── styles/                    # CSS and styling
│   │   └── cosmic-ui.css
│   └── demo/                      # Demo system
│       └── index.ts
├── dist/                          # Built output
│   ├── index.esm.js               # ES Module build
│   ├── index.cjs.js               # CommonJS build
│   ├── index.umd.js               # UMD build
│   ├── index.d.ts                 # TypeScript declarations
│   └── cosmic-ui.css              # Processed styles
├── docs/                          # Documentation
│   └── wiki/                      # Local wiki source files
├── screenshots/                   # Component visual examples
├── README.md                      # Project overview
├── CHANGELOG.md                   # This file
└── package.json                   # Package metadata
```

### Browser Support
- Chrome 88+ (WebGPU optional)
- Firefox 85+
- Safari 14+
- Edge 88+

### Breaking Changes
- None (initial release)

### Migration Guide
- None (initial release)

---

*"Built for the future. Designed for space. 🚀"*