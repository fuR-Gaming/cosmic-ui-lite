import { createSvgElements } from '../utils/gradients';
import type { CosmicTagOptions } from '../types';

export class CosmicTag {
  /**
   * Creates a cosmic-themed tag (like modal but without overlay and buttons) using SVG shape
   */
  static create(options: CosmicTagOptions): HTMLDivElement {
    // Create tag wrapper (no overlay, direct positioning)
    const tagWrapper = document.createElement('div');
    tagWrapper.className =
      options.flipped !== false
        ? 'cosmic-tag-wrapper flipped'
        : 'cosmic-tag-wrapper';

    // Use helper method to create SVG elements for tag (uses modal style)
    const { backgroundSvg, borderSvg } = createSvgElements('tagGradient', '#00d4ff', 'modal');

    // Create tag content container
    const tagContent = document.createElement('div');
    tagContent.className = 'cosmic-content';

    if (options.className) {
      tagContent.className += ` ${options.className}`;
    }

    // Create header if title is provided
    if (options.title) {
      const header = document.createElement('div');
      header.className = 'cosmic-header-bordered';

      const title = document.createElement('h2');
      title.className = 'cosmic-title-enhanced';
      title.textContent = options.title;
      header.appendChild(title);
      tagContent.appendChild(header);
    }

    if (typeof options.content === 'string') {
      tagContent.innerHTML = options.content;
    } else if (options.content instanceof HTMLElement) {
      tagContent.appendChild(options.content);
    } else {
      // Fallback for invalid content types
      tagContent.innerHTML = String(options.content || 'No content provided');
    }

    tagWrapper.appendChild(backgroundSvg);
    tagWrapper.appendChild(borderSvg);
    tagWrapper.appendChild(tagContent);
    return tagWrapper;
  }
}