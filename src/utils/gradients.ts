import type { GradientStop } from './svg';
import { createSvgElement, createGradient, createPath, PATHS, VIEW_BOXES } from './svg';

export type GradientType = 'card' | 'modal' | 'info' | 'button' | 'tag';

/**
 * Gets gradient stops for different component types
 */
export function getGradientStops(type: GradientType): GradientStop[] {
  switch (type) {
    case 'modal':
    case 'tag':
      return [
        { offset: '0%', color: '#1a1a2e' },
        { offset: '30%', color: '#2a2a4e' },
        { offset: '50%', color: '#1a1a2e' },
        { offset: '70%', color: '#3a1a4e' },
        { offset: '100%', color: '#1a1a2e' }
      ];
    case 'info':
      return [
        { offset: '0%', color: '#1a2a3e' },
        { offset: '30%', color: '#2a3a5e' },
        { offset: '50%', color: '#1a2a3e' },
        { offset: '70%', color: '#3a4a6e' },
        { offset: '100%', color: '#1a2a3e' }
      ];
    case 'button':
      return [
        { offset: '0%', color: '#1a1a2e' },
        { offset: '25%', color: '#2a2a4e' },
        { offset: '50%', color: '#1a1a2e' },
        { offset: '75%', color: '#4a2a3e' },
        { offset: '100%', color: '#1a1a2e' }
      ];
    case 'card':
    default:
      return [
        { offset: '0%', color: '#1a1a2e' },
        { offset: '30%', color: '#1a3a2e' },
        { offset: '70%', color: '#3a2a1e' },
        { offset: '100%', color: '#1a1a2e' }
      ];
  }
}

/**
 * Helper method to create SVG background and border elements
 */
export function createSvgElements(
  gradientId: string,
  borderColor: string = '#333333',
  gradientType: GradientType = 'card'
) {

  // Create background SVG
  const backgroundSvg = createSvgElement('cosmic-bg', VIEW_BOXES.MODAL);

  // Add gradient definition
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const gradient = createGradient(gradientId, getGradientStops(gradientType));
  defs.appendChild(gradient);
  backgroundSvg.appendChild(defs);

  // Add background path
  const backgroundPath = createPath(PATHS.MODAL_BACKGROUND, `url(#${gradientId})`);
  backgroundSvg.appendChild(backgroundPath);

  // Create border SVG
  const borderSvg = createSvgElement('cosmic-border', VIEW_BOXES.MODAL);

  // Add border path
  const borderPath = createPath(PATHS.MODAL_BORDER, 'transparent', borderColor, '2');
  borderSvg.appendChild(borderPath);

  return { backgroundSvg, borderSvg, backgroundPath, borderPath };
}