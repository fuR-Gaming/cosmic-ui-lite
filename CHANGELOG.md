# Changelog

All notable changes to Cosmic UI Lite will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-08-30

### Added
- Initial release of Cosmic UI Lite component library
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

### Technical Features
- **Zero Dependencies**: Pure TypeScript/JavaScript implementation
- **CSS Custom Properties**: Easy theming with CSS variables
- **Consolidated Classes**: Optimized CSS with `.cosmic-content`, `.cosmic-header-bordered`, `.cosmic-title-enhanced`
- **Legacy Compatibility**: Backward compatibility aliases for existing codebases
- **Cross-browser Support**: Works in all modern browsers with SVG support

### Documentation
- Comprehensive README with usage examples and API documentation
- **Visual Showcase**: Component screenshots demonstrating all UI elements
- TypeScript type definitions in separate `types.ts` file  
- Component architecture and customization guide
- Responsive design breakpoint documentation
- Animation system explanation and customization options

### Credits
- **Inspiration**: [cosmic-ui](https://github.com/rizkimuhammada/cosmic-ui) by rizkimuhammada - original React-based cosmic UI library
- **SVG Graphics**: "HUD futuristic frame" by luqman firdau @ Vecteezy.com
- **Design Philosophy**: Sci-fi and space-themed interfaces
- **Built for**: Planet Blue Invasion game project and vanilla JS/TS applications

### Package Structure
```
cosmic-ui/
├── README.md           # Comprehensive documentation
├── CHANGELOG.md        # This file
├── package.json        # Package metadata
├── index.ts            # Main entry point
├── cosmicUI.ts         # Core component library
├── cosmicDemo.ts       # Demo/testing utilities
├── types.ts            # TypeScript type definitions
├── cosmic-ui.css       # Styles and animations
└── screenshots/        # Component visual examples
    ├── screenshot-cosmic-modal.png
    ├── screenshot-cosmic-info.png
    ├── screenshot-cosmic-card.png
    └── screenshot-cosmic-tag.png
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