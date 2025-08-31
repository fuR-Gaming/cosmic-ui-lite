import { createSvgElements } from '../utils/gradients';
import type { CosmicCardOptions } from '../types';

export class CosmicCard {
  /**
   * Creates a cosmic-themed card with angled corners and subtle glow using SVG shape
   */
  static create(options: CosmicCardOptions): HTMLDivElement {
    // Create wrapper container
    const wrapper = document.createElement('div');
    wrapper.className = 'cosmic-card-wrapper';

    // Use helper method to create SVG elements for card
    const { backgroundSvg, borderSvg, backgroundPath, borderPath } = createSvgElements('cardGradient', '#333333', 'card');

    // Create actual card content
    const card = document.createElement('div');
    card.className = 'cosmic-card';

    if (options.className) {
      card.className += ` ${options.className}`;
    }

    if (options.title) {
      const title = document.createElement('h3');
      title.className = 'cosmic-card-title';
      title.textContent = options.title;
      card.appendChild(title);
    }

    const content = document.createElement('div');
    content.className = 'cosmic-card-content';

    if (typeof options.content === 'string') {
      content.innerHTML = options.content;
    } else if (options.content instanceof HTMLElement) {
      content.appendChild(options.content);
    } else {
      // Fallback for invalid content types
      content.innerHTML = String(options.content || 'No content provided');
    }

    card.appendChild(content);

    // Add hover effects for cards (SVG color changes)
    wrapper.addEventListener('mouseenter', () => {
      borderPath.setAttribute('stroke', '#00d4ff'); // Hover border color
      backgroundPath.setAttribute('fill', '#2a2a4e'); // Hover background color
    });

    wrapper.addEventListener('mouseleave', () => {
      borderPath.setAttribute('stroke', '#333333'); // Default border color
      backgroundPath.setAttribute('fill', '#1a1a2e'); // Default background color
    });

    wrapper.appendChild(backgroundSvg);
    wrapper.appendChild(borderSvg);
    wrapper.appendChild(card);

    return wrapper;
  }
}