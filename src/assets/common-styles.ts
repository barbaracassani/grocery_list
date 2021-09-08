import { InterpolationFunction } from 'styled-components';

export const colours = {
  dark: '#333333',
  light: '#f5f5f5',
  highlight: '#fed800',
  blue: '#1795d4'
};

export const fadeInAndEnterFromTop = (speed?: number) => `
  animation: fadeinandslide ${speed || 1}s;
  @keyframes fadeinandslide {
    from {
      opacity: 0;
      transform: translateY(-3em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const breakpoints = {
  small: '(max-width: 650px)',
  smallAndMedium: '(max-width: 968px)',
  medium: '(min-width: 650px) and (max-width: 968px)',
  mediumAndBig: '(min-width: 651px)',
  big: '(min-width: 969px)'
};
