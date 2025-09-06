# Architecture Overview

Deep dive into Cosmic UI Lite's technical architecture, design decisions, and system organization.

## 📋 Table of Contents

- [Core Architecture](#core-architecture)
- [Component Structure](#component-structure)
- [SVG Rendering System](#svg-rendering-system)
- [Animation Framework](#animation-framework)
- [Build Pipeline](#build-pipeline)
- [Module System](#module-system)
- [Performance Considerations](#performance-considerations)
- [Design Decisions](#design-decisions)

---

## Core Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                    COSMIC UI LITE                       │
├─────────────────────────────────────────────────────────┤
│  Application Layer                                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │ CosmicUI    │ │ Game Logic  │ │ User Events │      │
│  │ (Static)    │ │             │ │             │      │
│  └─────────────┘ └─────────────┘ └─────────────┘      │
├─────────────────────────────────────────────────────────┤
│  Component Layer                                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │ Button      │ │ Modal       │ │ Card        │      │
│  │ Info        │ │ Tag         │ │ ...         │      │
│  └─────────────┘ └─────────────┘ └─────────────┘      │
├─────────────────────────────────────────────────────────┤
│  Utility Layer                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │ SVG Utils   │ │ Gradients   │ │ Types       │      │
│  └─────────────┘ └─────────────┘ └─────────────┘      │
├─────────────────────────────────────────────────────────┤
│  Platform Layer                                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │ DOM API     │ │ CSS Engine  │ │ Event System│      │
│  └─────────────┘ └─────────────┘ └─────────────┘      │
└─────────────────────────────────────────────────────────┘
```

### Design Principles

1. **Zero Dependencies** - Pure vanilla JavaScript/TypeScript
2. **Modular Design** - Both component and CSS architecture are modular
3. **SVG-Based** - Vector graphics for scalability
4. **Performance First** - Optimized for 60fps animations
5. **Type Safety** - Complete TypeScript support
6. **Framework Agnostic** - Works with any framework or vanilla JS
7. **Design System Driven** - CSS custom properties enable consistent theming

---

## Component Structure

### Universal Component Pattern

Every Cosmic UI component follows the same 4-layer structure:

```html
<!-- Layer 1: Wrapper Container -->
<div class="cosmic-[component]-wrapper">
  <!-- Layer 2: Background SVG -->
  <svg class="cosmic-background" viewBox="...">
    <defs>
      <linearGradient id="[component]Gradient">...</linearGradient>
    </defs>
    <path fill="url(#[component]Gradient)" d="..."></path>
  </svg>
  
  <!-- Layer 3: Border SVG -->
  <svg class="cosmic-border" viewBox="...">
    <path fill="none" stroke="..." d="..."></path>
  </svg>
  
  <!-- Layer 4: Content -->
  <div class="cosmic-content">
    <!-- Component-specific content -->
  </div>
</div>
```

### Layer Responsibilities

#### Layer 1: Wrapper Container
```typescript
// Positioning, sizing, hover states
const wrapper = document.createElement('div');
wrapper.className = `cosmic-${type}-wrapper`;
wrapper.style.position = 'relative';
wrapper.style.display = 'inline-block';
```

**Responsibilities:**
- Component positioning and sizing
- Hover state management
- Event delegation
- CSS class coordination

#### Layer 2: Background SVG
```typescript
// Animated gradient fill
const backgroundSvg = createSvgElement('cosmic-background', viewBox);
const gradient = createGradient(`${type}Gradient`, gradientStops);
const backgroundPath = createPath(PATHS.BACKGROUND, `url(#${type}Gradient)`);
```

**Responsibilities:**
- Animated gradient backgrounds
- Particle flash effects
- Visual depth and texture

#### Layer 3: Border SVG
```typescript
// Animated outline effects
const borderSvg = createSvgElement('cosmic-border', viewBox);
const borderPath = createPath(PATHS.BORDER, 'none', strokeColor, strokeWidth);
```

**Responsibilities:**
- Cosmic pulsing animations
- Interactive hover effects
- Visual component boundaries

#### Layer 4: Content Layer
```typescript
// Interactive content
const content = document.createElement('div');
content.className = 'cosmic-content';
// Add text, buttons, form elements, etc.
```

**Responsibilities:**
- User-facing content
- Interactive elements
- Text and typography
- Custom content injection

---

## SVG Rendering System

### Path Definition System

```typescript
// src/utils/svg.ts
export const PATHS = {
  // Shared paths for consistent shapes
  MODAL_BACKGROUND: 'M 265.95318,319.32816 H 448.53221...',
  MODAL_BORDER: 'M 265.95318,319.32816 H 448.53221...',
  BUTTON_BACKGROUND: 'M 77.484816,21.569251 H 105.32498...',
  BUTTON_BORDER: 'm 70.54467,0.53487593 h 399.09296...',
  CLOSE_ICON: 'M16 8L8 16M8.00003 8L10 10M16 16L12 12'
};

export const VIEW_BOXES = {
  MODAL: '0 0 474 332',
  BUTTON: '0 0 474 329',
  CLOSE_ICON: '0 0 24 24'
};
```

### SVG Creation Pipeline

```typescript
// 1. Create SVG container
const svg = createSvgElement(className, viewBox);

// 2. Add gradient definitions
const gradient = createGradient(id, gradientStops);
svg.appendChild(gradient);

// 3. Create and add paths
const path = createPath(pathData, fill, stroke, strokeWidth);
svg.appendChild(path);

// 4. Apply animations via CSS classes
svg.classList.add('animated-element');
```

### Gradient System

```typescript
// src/utils/gradients.ts
export const GRADIENT_DEFINITIONS = {
  card: [
    { offset: '0%', color: 'rgba(0, 212, 255, 0.1)' },
    { offset: '50%', color: 'rgba(0, 212, 255, 0.05)' },
    { offset: '100%', color: 'rgba(0, 212, 255, 0.1)' }
  ],
  button: [
    { offset: '0%', color: 'rgba(0, 212, 255, 0.2)' },
    { offset: '50%', color: 'rgba(255, 107, 53, 0.1)' },
    { offset: '100%', color: 'rgba(0, 212, 255, 0.2)' }
  ]
  // ... more gradient definitions
};
```

### Performance Optimizations

#### SVG Reuse Strategy
```typescript
// Cache SVG elements for reuse
const svgCache = new Map<string, SVGElement>();

const getCachedSVG = (type: string, variant: string): SVGElement => {
  const key = `${type}-${variant}`;
  if (!svgCache.has(key)) {
    svgCache.set(key, createSvgElement(type, variant));
  }
  return svgCache.get(key)!.cloneNode(true) as SVGElement;
};
```

#### Viewport Culling
```typescript
// Only animate visible elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const element = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
});
```

---

## Animation Framework

### Three-Layer Animation System

#### Layer 1: Particle Flash (Background)
```css
@keyframes particleFlash {
  0% { 
    background-position: 0% 50%; 
    opacity: 0.6;
  }
  50% { 
    background-position: 100% 50%; 
    opacity: 1;
  }
  100% { 
    background-position: 0% 50%; 
    opacity: 0.6;
  }
}

.cosmic-background {
  animation: particleFlash 8s ease-in-out infinite;
}
```

**Characteristics:**
- 8-second cycle for subtle movement
- Gradient position animation
- Opacity variation for depth

#### Layer 2: Cosmic Pulse (Border)
```css
@keyframes cosmicPulse {
  0%, 100% { 
    stroke: rgba(0, 212, 255, 0.8);
    filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.5));
  }
  50% { 
    stroke: rgba(255, 107, 53, 0.9);
    filter: drop-shadow(0 0 10px rgba(255, 107, 53, 0.7));
  }
}

.cosmic-border {
  animation: cosmicPulse 3s ease-in-out infinite alternate;
}
```

**Characteristics:**
- 3-second alternate cycle
- Color transitions between blue and orange
- Drop-shadow effects for glow

#### Layer 3: Hover Effects (Interactive)
```css
.cosmic-btn-wrapper:hover {
  transform: scale(1.05) translateY(-2px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cosmic-btn-wrapper:hover .cosmic-border {
  stroke-width: 2px;
  filter: drop-shadow(0 0 15px currentColor);
}
```

**Characteristics:**
- Immediate response to user interaction
- Scale and transform effects
- Enhanced glow on hover

### Animation Performance

#### GPU Acceleration
```css
.cosmic-component {
  /* Force GPU layer */
  transform: translateZ(0);
  will-change: transform, opacity;
  
  /* Smooth animations */
  backface-visibility: hidden;
  perspective: 1000px;
}
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .cosmic-component {
    animation-duration: 0.01s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01s !important;
  }
}
```

---

## CSS Architecture

### Modular CSS Structure

Cosmic UI Lite now uses a modular CSS architecture for better maintainability and organization:

```
src/styles/
├── cosmic-ui.css              # Main entry point with imports
├── README.md                  # CSS architecture documentation  
├── base/                      # Foundation styles
│   ├── _variables.css         # CSS custom properties and design tokens
│   ├── _shared.css           # Shared component styles and utilities
│   └── _responsive.css       # Mobile-first responsive design
├── animations/                # Animation and interaction effects
│   ├── _keyframes.css        # All animation definitions
│   └── _hover-effects.css    # Interactive hover states
└── components/                # Individual component styles
    ├── _button.css           # Button component styles
    ├── _modal.css            # Modal component styles  
    ├── _card.css             # Card component styles
    ├── _info.css             # Info popup component styles
    └── _tag.css              # Tag component styles
```

### CSS Custom Properties System

```css
/* CSS Design Tokens (_variables.css) */
:root {
  /* Color System */
  --cosmic-primary: #00d4ff;
  --cosmic-primary-glow: rgba(0, 212, 255, 0.3);
  --cosmic-button-primary: #4da6ff;
  --cosmic-button-secondary: #ff6b35;
  --cosmic-button-danger: #ff4444;
  
  /* Spacing System */
  --cosmic-button-min-width: 120px;
  --cosmic-card-min-width: 300px;
  --cosmic-padding-small: 4px;
  --cosmic-padding-large: 20px;
  
  /* Animation System */
  --cosmic-transition-fast: 0.3s;
  --cosmic-animation-pulse-medium: 3s;
  --cosmic-animation-particle-medium: 8s;
}
```

### Build-Time CSS Processing

The modular CSS is processed during build time using PostCSS:

```javascript
// CSS processing in rollup.config.js
postcss({
  extract: 'cosmic-ui.css',
  minimize: production,
  sourceMap: !production,
  plugins: [
    postcssImport({
      path: ['src/styles', 'src/styles/base', 'src/styles/components', 'src/styles/animations']
    })
  ]
})
```

**Processing Pipeline:**
1. **Import Resolution** - `@import` statements are resolved and inlined
2. **CSS Variable Processing** - Custom properties are optimized
3. **Vendor Prefixing** - Auto-prefixes for browser compatibility
4. **Minification** - CSS is compressed for production
5. **Source Maps** - Generated for development debugging

## Build Pipeline

### Enhanced Rollup Configuration

```javascript
// rollup.config.js
export default [
  // ES Module build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      typescript({ declaration: true, outDir: 'dist' }),
      postcss({ 
        extract: 'cosmic-ui.css', 
        minimize: true,
        plugins: [postcssImport()] // NEW: Resolves CSS imports
      })
    ]
  },
  
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [typescript()]
  },
  
  // UMD build for browsers
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'CosmicUI', // Updated name
      sourcemap: true
    },
    plugins: [typescript(), terser()]
  }
];
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "lib": ["ES2020", "DOM"],
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### PostCSS Processing

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true
      }]
    })
  ]
};
```

---

## Module System

### Export Strategy

```typescript
// src/index.ts - Main entry point
export { CosmicUI } from './CosmicUI';
export { CosmicButton } from './components/CosmicButton';
export { CosmicModal } from './components/CosmicModal';
// ... other exports

// Individual components can be imported
export * from './types';
export * from './utils/svg';
```

### Dependency Graph

```
index.ts
├── CosmicUI.ts (main class)
├── components/
│   ├── CosmicButton.ts
│   │   ├── utils/gradients.ts
│   │   └── types/index.ts
│   ├── CosmicModal.ts
│   │   ├── utils/svg.ts
│   │   ├── utils/gradients.ts
│   │   └── components/CosmicButton.ts
│   └── ...
├── utils/
│   ├── svg.ts (core SVG functions)
│   └── gradients.ts (gradient definitions)
└── types/
    └── index.ts (TypeScript definitions)
```

### Tree Shaking Support

```typescript
// Individual imports for minimal bundles
import { CosmicButton } from 'cosmic-ui-lite/components/CosmicButton';
import { createSvgElement } from 'cosmic-ui-lite/utils/svg';

// Or full library
import { CosmicUI } from 'cosmic-ui-lite';
```

---

## Performance Considerations

### Memory Management

#### Component Cleanup
```typescript
class ComponentManager {
  private components = new WeakMap<HTMLElement, ComponentData>();
  
  register(element: HTMLElement, data: ComponentData) {
    this.components.set(element, data);
    
    // Auto-cleanup when element is removed from DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.removedNodes.forEach(node => {
          if (node === element) {
            this.cleanup(element);
            observer.disconnect();
          }
        });
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  cleanup(element: HTMLElement) {
    const data = this.components.get(element);
    if (data?.eventListeners) {
      data.eventListeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    }
  }
}
```

#### Animation Optimization
```typescript
// Pause animations when not visible
const optimizeAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const animations = entry.target.getAnimations();
      if (entry.isIntersecting) {
        animations.forEach(anim => anim.play());
      } else {
        animations.forEach(anim => anim.pause());
      }
    });
  });
  
  document.querySelectorAll('.cosmic-component').forEach(el => {
    observer.observe(el);
  });
};
```

### Bundle Size Optimization

#### Code Splitting
```typescript
// Lazy load components
const lazyComponents = {
  modal: () => import('./components/CosmicModal'),
  card: () => import('./components/CosmicCard'),
  info: () => import('./components/CosmicInfo')
};

export const createComponent = async (type: string, options: any) => {
  const componentModule = await lazyComponents[type]();
  return componentModule.create(options);
};
```

#### CSS Purging
```javascript
// Remove unused CSS in production
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.ts', './demo/**/*.html'],
      safelist: [/^cosmic-/, /^animate-/]
    })
  ]
};
```

---

## Design Decisions

### Why SVG Over Canvas?

**SVG Advantages:**
- **Scalability**: Vector graphics scale perfectly
- **CSS Integration**: Can be styled with CSS
- **Accessibility**: Screen reader compatible
- **DOM Integration**: Part of the document tree
- **Animation**: CSS animations work naturally

**Trade-offs:**
- **Complexity**: More DOM nodes than canvas
- **Performance**: Canvas is faster for complex scenes
- **Control**: Less fine-grained control than canvas

### Why Zero Dependencies?

**Benefits:**
- **Bundle Size**: No third-party code
- **Security**: No external vulnerabilities
- **Compatibility**: Works everywhere
- **Simplicity**: Less complexity to manage

**Trade-offs:**
- **Development Time**: More code to write
- **Feature Set**: Limited compared to full frameworks
- **Maintenance**: All code is our responsibility

### Why TypeScript?

**Benefits:**
- **Type Safety**: Catch errors at compile time
- **Developer Experience**: Better IDE support
- **Documentation**: Types serve as documentation
- **Refactoring**: Safe code changes

**Trade-offs:**
- **Build Step**: Requires compilation
- **Complexity**: Additional tooling needed
- **Learning Curve**: TypeScript knowledge required

### Animation Strategy

**CSS Animations vs JavaScript:**
- **CSS**: Hardware accelerated, declarative, performant
- **JavaScript**: More control, complex interactions, dynamic

**Decision**: CSS for core animations, JavaScript for interactions

### Component Architecture

**Static Classes vs Instances:**
- **Static**: Simpler API, less memory overhead
- **Instances**: More flexibility, better encapsulation

**Decision**: Static methods for simplicity, matching the zero-dependency philosophy

---

## 🔮 Future Architecture

### Planned Improvements

1. **Web Components**: Native custom elements support
2. **CSS-in-JS**: Runtime theming capabilities
3. **Animation Library**: More sophisticated animation system
4. **Plugin System**: Extensible component architecture
5. **SSR Support**: Server-side rendering compatibility

### Extensibility Points

```typescript
// Plugin architecture concept
interface CosmicPlugin {
  name: string;
  install(cosmic: CosmicUI): void;
}

class CosmicUI {
  private static plugins: CosmicPlugin[] = [];
  
  static use(plugin: CosmicPlugin) {
    this.plugins.push(plugin);
    plugin.install(this);
  }
}

// Usage
CosmicUI.use(new ThemePlugin());
CosmicUI.use(new AnimationPlugin());
```

This architecture provides a solid foundation for a lightweight, performant UI library while maintaining flexibility for future enhancements.