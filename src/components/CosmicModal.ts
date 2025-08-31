import { createSvgElements } from '../utils/gradients';
import type { CosmicModalOptions } from '../types';
import { CosmicButton } from './CosmicButton';

export class CosmicModal {
  /**
   * Creates a cosmic-themed modal with backdrop blur and slide-in animation using SVG shape
   */
  static create(options: CosmicModalOptions): HTMLDivElement {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'cosmic-modal-overlay';

    // Create modal content wrapper
    const modalWrapper = document.createElement('div');
    modalWrapper.className = 'cosmic-modal-wrapper';

    // Use helper method to create SVG elements
    const { backgroundSvg, borderSvg } = createSvgElements('modalGradient', '#00d4ff', 'modal');

    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.className = 'cosmic-content';

    if (options.className) {
      modalContent.className += ` ${options.className}`;
    }

    // Create header
    const header = document.createElement('div');
    header.className = 'cosmic-header-bordered';

    const title = document.createElement('h2');
    title.className = 'cosmic-title-enhanced';
    title.textContent = options.title;
    header.appendChild(title);

    // Create close button if enabled
    if (options.showCloseButton !== false) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'cosmic-modal-close';
      closeBtn.innerHTML =
        '<img src="textures/icons/close.svg" alt="Close" style="width: 40px; height: 40px; filter: inherit;">';
      closeBtn.addEventListener('click', () => {
        CosmicModal.close(overlay);
        if (options.onClose) options.onClose();
      });
      modalContent.appendChild(closeBtn);
    }

    // Create body
    const body = document.createElement('div');
    body.className = 'cosmic-modal-body';

    if (typeof options.content === 'string') {
      body.innerHTML = options.content;
    } else if (options.content instanceof HTMLElement) {
      body.appendChild(options.content);
    } else {
      // Fallback for invalid content types
      body.innerHTML = String(options.content || 'No content provided');
    }

    // Create footer with buttons
    if (options.buttons && options.buttons.length > 0) {
      const footer = document.createElement('div');
      footer.className = 'cosmic-modal-footer';

      options.buttons.forEach((buttonOptions) => {
        const button = CosmicButton.create({
          ...buttonOptions,
          onClick: () => {
            if (buttonOptions.onClick) buttonOptions.onClick();
            // Auto-close modal unless it's a custom button that should keep modal open
            if (!buttonOptions.className?.includes('no-auto-close')) {
              CosmicModal.close(overlay);
            }
          },
        });
        footer.appendChild(button);
      });

      modalContent.appendChild(header);
      modalContent.appendChild(body);
      modalContent.appendChild(footer);
    } else {
      console.warn("No buttons provided for modal, that may breaks the layout of modals");
      modalContent.appendChild(header);
      modalContent.appendChild(body);
    }

    // Prevent modal content clicks from closing the modal
    modalWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close modal when clicking overlay
    overlay.addEventListener('click', () => {
      CosmicModal.close(overlay);
      if (options.onClose) options.onClose();
    });

    // Close modal on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        CosmicModal.close(overlay);
        if (options.onClose) options.onClose();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    modalWrapper.appendChild(backgroundSvg);
    modalWrapper.appendChild(borderSvg);
    modalWrapper.appendChild(modalContent);
    overlay.appendChild(modalWrapper);
    return overlay;
  }

  /**
   * Shows a modal by adding it to the document body
   */
  static show(modal: HTMLDivElement): void {
    document.body.appendChild(modal);
  }

  /**
   * Closes and removes a modal from the document
   */
  static close(modal: HTMLDivElement): void {
    modal.style.animation = 'modalFadeIn 0.2s ease-out reverse';
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 200);
  }
}