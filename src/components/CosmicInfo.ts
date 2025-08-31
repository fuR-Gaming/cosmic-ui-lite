import { createSvgElements } from '../utils/gradients';
import type { CosmicInfoOptions } from '../types';

export class CosmicInfo {
  /**
   * Create an info popup with modal-like styling but no buttons or close button
   */
  static create(options: CosmicInfoOptions): HTMLDivElement {
    // Create win overlay with transparent blur
    const overlay = document.createElement('div');
    overlay.className = 'cosmic-info-overlay';

    // Create modal content wrapper
    const infoWrapper = document.createElement('div');
    infoWrapper.className = 'cosmic-info-wrapper';

    // Use helper method to create SVG elements with info-specific coloring
    const { backgroundSvg, borderSvg } = createSvgElements(
      'infoGradient',
      '#00d4ff',
      'info'
    );

    // Create info content container (same as modal content)
    const infoContent = document.createElement('div');
    infoContent.className = 'cosmic-content';

    if (options.className) {
      infoContent.className += ` ${options.className}`;
    }

    // Create header only if title is provided
    let header: HTMLDivElement | undefined;
    if (options.title) {
      header = document.createElement('div');
      header.className = 'cosmic-header-bordered';

      const title = document.createElement('h2');
      title.className = `cosmic-info-title cosmic-title-enhanced${
        options.titleColor ? ' ' + options.titleColor : ''
      }`;
      title.textContent = options.title;
      header.appendChild(title);
    }

    // Create body (same as modal)
    const body = document.createElement('div');
    body.className = 'cosmic-modal-body';

    if (typeof options.content === 'string') {
      body.innerHTML = options.content;
    } else if (options.content instanceof HTMLElement) {
      body.appendChild(options.content);
    } else {
      body.innerHTML = String(options.content || 'No content provided');
    }

    // Assemble info content (header + body only, no buttons or close button)
    if (header) {
      infoContent.appendChild(header);
    }
    infoContent.appendChild(body);

    // Prevent info content clicks from closing the info
    infoWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close info when clicking overlay
    overlay.addEventListener('click', () => {
      if (options.onClose) options.onClose();
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    });

    // Assemble the complete info popup
    infoWrapper.appendChild(backgroundSvg);
    infoWrapper.appendChild(borderSvg);
    infoWrapper.appendChild(infoContent);

    overlay.appendChild(infoWrapper);
    return overlay;
  }
}