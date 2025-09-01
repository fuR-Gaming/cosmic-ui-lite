// SVG utilities and path definitions
export const PATHS = {
  MODAL_BACKGROUND: 'M 265.95318,319.32816 H 448.53221 V 83.2702 L 388.18033,22.91834 H 12.563998 v 232.299 H 199.28437 c 1.70635,0 3.25149,0.6935 4.36769,1.81279 z',
  MODAL_BORDER: 'M 265.95318,319.32816 H 448.53221 V 83.2702 L 388.18033,22.91834 H 12.563998 v 232.299 H 199.28437 c 1.70635,0 3.25149,0.6935 4.36769,1.81279 z M 87.602309,318.31528 H 57.655818 L 20.263785,280.55635 h 29.946494 z m 46.857081,0 H 104.5129 L 67.119839,280.55635 h 29.947526 z m 46.86226,0 h -29.94856 l -37.38997,-37.75893 h 29.94753 z m 46.86226,0 h -29.94753 l -37.39099,-37.75893 h 29.94546 z M 442.30106,46.18823 395.70235,-0.40943956 H 342.34643 L 331.48613,10.55733 H 6.3824633 c -3.413744,0 -6.18153394,2.7678 -6.18153394,6.1805 v 244.65999 c 0,3.41583 2.76778994,6.18361 6.18153394,6.18361 H 196.72225 l 61.4557,61.45154 c 1.11619,1.60612 2.97344,2.65721 5.07669,2.65721 h 191.45805 c 3.41273,0 6.18051,-2.76778 6.18051,-6.18154 V 147.25906 l 13.61054,-13.47722 V 78.39091 L 442.30106,46.18823',
  BUTTON_BACKGROUND: 'M 77.484816,21.569251 H 105.32498 L 117.80174,9.0935273 h 347.5581 V 146.188 l -12.47777,12.47779 v 93.39481 l -56.60845,56.60741 H 368.43244 L 355.9567,321.14579 H 8.3985972 V 184.04927 L 20.875357,171.57456 V 78.178714 L 77.484816,21.569251',
  BUTTON_BORDER: 'm 70.54467,0.53487593 h 399.09296 c 2.36265,0 4.27881,1.91822907 4.27881,4.28087607 V 259.00075 c 0,1.18028 -0.47956,2.25205 -1.25161,3.02411 l -66.42695,66.42385 c -0.83614,0.83611 -1.93064,1.25368 -3.02411,1.25368 H 4.1197872 c -2.36265,0 -4.27880996,-1.91513 -4.27880996,-4.27778 V 71.239603 c 0,-1.18029 0.47956,-2.252059 1.25366996,-3.024105 L 67.519533,1.788546 C 68.354624,0.95552393 69.449131,0.53694493 70.54467,0.53694493 Z M 77.484816,21.569251 H 105.32498 L 117.80174,9.0935273 h 347.5581 V 146.188 l -12.47777,12.47779 v 93.39481 l -56.60845,56.60741 H 368.43244 L 355.9567,321.14579 H 8.3985972 V 184.04927 L 20.875357,171.57456 V 78.178714 L 77.484816,21.569251',
  CLOSE_ICON: 'M16 8L8 16M8.00003 8L10 10M16 16L12 12'
};

export const VIEW_BOXES = {
  MODAL: '0 0 474 332',
  BUTTON: '0 0 474 329',
  CLOSE_ICON: '0 0 24 24'
};

export interface GradientStop {
  offset: string;
  color: string;
}

/**
 * Creates an SVG element with common attributes
 */
export function createSvgElement(className: string, viewBox: string): SVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', className);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('viewBox', viewBox);
  return svg;
}

/**
 * Creates a linear gradient with specified stops
 */
export function createGradient(id: string, stops: GradientStop[]): SVGLinearGradientElement {
  const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  gradient.setAttribute('id', id);
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '100%');
  gradient.setAttribute('gradientUnits', 'objectBoundingBox');

  stops.forEach((stop) => {
    const stopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stopElement.setAttribute('offset', stop.offset);
    stopElement.setAttribute('stop-color', stop.color);
    gradient.appendChild(stopElement);
  });

  return gradient;
}

/**
 * Creates an SVG path element
 */
export function createPath(d: string, fill?: string, stroke?: string, strokeWidth?: string): SVGPathElement {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill-rule', 'evenodd');
  path.setAttribute('d', d);
  
  if (fill !== undefined) path.setAttribute('fill', fill);
  if (stroke !== undefined) path.setAttribute('stroke', stroke);
  if (strokeWidth !== undefined) path.setAttribute('stroke-width', strokeWidth);
  
  return path;
}

/**
 * Creates a close icon SVG element
 */
export function createCloseIcon(): SVGElement {
  const svg = createSvgElement('cosmic-close-icon', VIEW_BOXES.CLOSE_ICON);
  svg.style.width = '40px';
  svg.style.height = '40px';
  svg.style.cursor = 'pointer';
  
  const path = createPath(
    PATHS.CLOSE_ICON,
    'none',
    '#ffffff',
    '1.5'
  );
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  
  svg.appendChild(path);
  return svg;
}