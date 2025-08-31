# Cosmic UI Lite Wiki

Welcome to the **Cosmic UI Lite** comprehensive documentation wiki! This is your complete guide to understanding, implementing, and extending the lightweight, futuristic UI component library.

## 🚀 Quick Navigation

### Getting Started
- [Installation & Setup](Installation-&-Setup) - Get up and running quickly
- [Quick Start Guide](Quick-Start-Guide) - Your first components in 5 minutes
- [Architecture Overview](Architecture-Overview) - Understanding the system design

### Core Documentation
- [Component Reference](Component-Reference) - Complete API documentation
- [Build System](Build-System) - Understanding the Rollup-based build pipeline
- [TypeScript Support](TypeScript-Support) - Type definitions and usage

### Development Guides
- [Development Workflow](Development-Workflow) - Contributing and extending
- [Styling & Theming](Styling-&-Theming) - Customization and CSS variables
- [Animation System](Animation-System) - Understanding the three-layer animation

### Advanced Topics
- [SVG System](SVG-System) - Deep dive into the SVG rendering engine
- [Performance Optimization](Performance-Optimization) - Best practices for games
- [Browser Compatibility](Browser-Compatibility) - Support matrix and polyfills

### Examples & Tutorials
- [Complete Examples](Complete-Examples) - Real-world implementation examples
- [Game Integration](Game-Integration) - Using with game engines and frameworks
- [Common Patterns](Common-Patterns) - Reusable patterns and solutions

### Reference
- [API Reference](API-Reference) - Complete method and interface reference  
- [CSS Class Reference](CSS-Class-Reference) - All CSS classes and their purposes
- [Troubleshooting](Troubleshooting) - Common issues and solutions
- [Migration Guide](Migration-Guide) - Upgrading between versions

## 🎯 Project Overview

**Cosmic UI Lite** is a lightweight, zero-dependency TypeScript UI component library designed for futuristic/space-themed interfaces. Built specifically for games and interactive applications that need cosmic-style UI without framework dependencies.

### Key Features
- **🚫 Zero Dependencies**: Pure TypeScript/JavaScript
- **🎨 SVG-Based**: Scalable vector graphics for crisp rendering
- **⚡ Animated Effects**: Three-layer animation system
- **📱 Responsive**: Mobile-first responsive design
- **🎮 Game-Ready**: Optimized for interactive applications
- **🔧 TypeScript**: Full type safety and IntelliSense

### Design Philosophy
- **Simplicity First**: Easy to use, minimal API surface
- **Performance Focused**: Optimized for 60fps animations
- **Modular Architecture**: Use only what you need
- **Zero Build Required**: Works directly in browsers

## 🏗️ Architecture Highlights

### Component Structure
```
Cosmic Component
├── Wrapper Element (positioning, hover)
├── SVG Background (animated gradient fill)
├── SVG Border (animated outline effects)
└── Content Layer (text, interactive elements)
```

### Three Animation Layers
1. **Particle Flash** - Moving gradient backgrounds (8s cycle)
2. **Cosmic Pulse** - Border color cycling (3s alternate)
3. **Hover Effects** - Transform and glow changes

### Build Pipeline
- **Rollup** - Modern bundling with tree-shaking
- **TypeScript** - Full type safety and declarations
- **PostCSS** - CSS processing and minification
- **Multiple Formats** - ESM, CJS, UMD outputs

## 📦 Components Overview

### Interactive Components
- **[CosmicButton](Component-Reference#cosmicbutton)** - 4 variants with hover effects
- **[CosmicModal](Component-Reference#cosmicmodal)** - Full-featured modals with backdrop

### Display Components  
- **[CosmicCard](Component-Reference#cosmiccard)** - Content containers with hover effects
- **[CosmicInfo](Component-Reference#cosmicinfo)** - Overlay popups with 5 color themes
- **[CosmicTag](Component-Reference#cosmictag)** - Location tags with flip animations

### Utility Components
- **Error Dialogs** - Pre-configured error modals
- **Confirmation Dialogs** - Yes/No confirmation modals
- **Notifications** - Toast-style notifications

## 🎨 Visual Design System

### Color Palette
```css
--cosmic-primary: #00d4ff      /* Electric Blue */
--cosmic-secondary: #ff6b35    /* Solar Orange */
--cosmic-danger: #ff4444       /* Alert Red */
--cosmic-success: #00ff88      /* Success Green */
--cosmic-warning: #ffaa00      /* Warning Amber */
```

### Typography
- **Titles**: Bold, uppercase for headers
- **Body**: Clean, readable for content
- **Buttons**: Medium weight for actions

### Effects
- **Gradients**: Animated linear gradients
- **Glow**: CSS box-shadow for depth
- **Transforms**: Subtle scale and translate

## 🚀 Getting Started Fast

1. **Clone & Build**
   ```bash
   git clone https://github.com/fuR-Gaming/cosmic-ui-lite.git
   cd cosmic-ui-lite
   npm install
   npm run build
   ```

2. **Import & Use**
   ```typescript
   import { CosmicUI } from './dist/index.esm.js';
   
   const button = CosmicUI.createButton({
     text: 'Launch Sequence',
     variant: 'primary',
     onClick: () => console.log('Launched!')
   });
   ```

3. **Include Styles**
   ```html
   <link rel="stylesheet" href="./dist/cosmic-ui.css">
   ```

## 🎮 Perfect For Games

- **No Framework Lock-in**: Works with any engine
- **Performance Optimized**: 60fps animations
- **Memory Efficient**: Minimal memory footprint
- **Event-Driven**: Clean event handling
- **Responsive**: Adapts to different screen sizes

## 💡 Design Decisions

### Why SVG?
- **Scalable**: Crisp at any resolution
- **Animatable**: Smooth CSS animations  
- **Customizable**: Easy to modify paths
- **Performant**: Hardware-accelerated rendering

### Why Zero Dependencies?
- **Bundle Size**: Keep your game lightweight
- **Compatibility**: Works everywhere JavaScript works
- **Security**: No third-party vulnerabilities
- **Simplicity**: Less complexity, fewer bugs

### Why TypeScript?
- **Developer Experience**: IntelliSense and autocomplete
- **Type Safety**: Catch errors at compile time
- **Documentation**: Types serve as inline docs
- **Refactoring**: Safe code changes

## 🔗 Quick Links

- **[GitHub Repository](https://github.com/fuR-Gaming/cosmic-ui-lite)**
- **[Issues & Bug Reports](https://github.com/fuR-Gaming/cosmic-ui-lite/issues)**
- **[Discussions](https://github.com/fuR-Gaming/cosmic-ui-lite/discussions)**
- **[Latest Release](https://github.com/fuR-Gaming/cosmic-ui-lite/releases)**

## 📚 Next Steps

1. **New to the library?** Start with [Installation & Setup](Installation-&-Setup)
2. **Want to see code?** Check out [Complete Examples](Complete-Examples)  
3. **Building a game?** Read [Game Integration](Game-Integration)
4. **Contributing?** See [Development Workflow](Development-Workflow)

---

**Built for the future. Designed for space. 🚀**

*This wiki is maintained by the Cosmic UI Lite community. Contributions welcome!*