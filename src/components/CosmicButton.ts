import { createSvgElement, createGradient, createPath, PATHS, VIEW_BOXES } from '../utils/svg';
import { getGradientStops } from '../utils/gradients';
import type { CosmicButtonOptions } from '../types';

export class CosmicButton {
  /**
   * Creates a cosmic-themed button with angled corners and glowing effects using SVG shape
   */
  static create(options: CosmicButtonOptions): HTMLButtonElement {
    // Create wrapper container
    const wrapper = document.createElement('div');
    wrapper.className = 'cosmic-btn-wrapper';

    // Create background SVG (behind the border)
    const backgroundSvg = createSvgElement('cosmic-btn-bg', VIEW_BOXES.BUTTON);

    // Add gradient definition for button background
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = createGradient('buttonGradient', getGradientStops('button'));
    defs.appendChild(gradient);
    backgroundSvg.appendChild(defs);

    // Add the button background shape path
    const backgroundPath = createPath(PATHS.BUTTON_BACKGROUND, 'url(#buttonGradient)');
    backgroundSvg.appendChild(backgroundPath);

    // Create border SVG (on top of background)
    const svg = createSvgElement('cosmic-btn-border', VIEW_BOXES.BUTTON);

    // Add the button border path
    const path = createPath(PATHS.BUTTON_BORDER, 'transparent', '#333333', '2');
    svg.appendChild(path);

    // Create actual button element
    const button = document.createElement('button');
    button.className = `cosmic-btn ${options.variant || 'default'}`;

    if (options.className) {
      button.className += ` ${options.className}`;
    }

    button.textContent = options.text;
    button.disabled = options.disabled || false;

    if (options.onClick) {
      button.addEventListener('click', options.onClick);
    }

    // Add hover effects for SVG color changes
    wrapper.addEventListener('mouseenter', () => {
      path.setAttribute('stroke', '#00d4ff'); // Hover border color
      backgroundPath.setAttribute('fill', '#2a2a4e'); // Hover background color
    });

    wrapper.addEventListener('mouseleave', () => {
      path.setAttribute('stroke', '#333333'); // Default border color
      backgroundPath.setAttribute('fill', '#1a1a2e'); // Default background color
    });

    wrapper.appendChild(backgroundSvg);
    wrapper.appendChild(svg);
    wrapper.appendChild(button);
    return wrapper as any; // Cast to HTMLButtonElement for compatibility
  }
}