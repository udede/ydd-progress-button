import {ProgressButtonService} from './progress-button.service';
import {Injectable, InjectionToken} from '@angular/core';

/**
 * Type of buttons
 */
export type ProgressButtonType = 'button' | 'reset' | 'submit';
/**
 * Types of animation directions
 */
export type ProgressButtonDirection = 'horizontal' | 'vertical';
/**
 * Types of status
 */
export type ProgressButtonStatus = 'success' | 'error';
/**
 * Types of animations
 */
export type ProgressButtonAnimation =
  'fill'
  | 'shrink'
  | 'rotate-angle-bottom'
  | 'rotate-angle-top'
  | 'rotate-angle-left'
  | 'rotate-angle-right'
  | 'rotate-side-down'
  | 'rotate-side-up'
  | 'rotate-side-left'
  | 'rotate-side-right'
  | 'rotate-back'
  | 'flip-open'
  | 'slide-down'
  | 'move-up'
  | 'top-line'
  | 'lateral-lines';

/**
 * Generic form data for Button
 */
export interface ProgressButtonForm {
  /**
   * Specifies one or more forms the button belongs to
   */
  id?: string | null;
  /**
   * Specifies where to send the form-data when a form is submitted. Only for type="submit"
   */
  action?: string | null;
  /**
   * Specifies that the form-data should not be validated on submission. Only for type="submit"
   */
  noValidate?: boolean | null;
  /**
   * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
   */
  enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | null;
  /**
   * Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
   */
  method?: 'get' | 'post' | null;
  /**
   * Specifies where to display the response after submitting the form. Only for type="submit"
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | null;
}

/**
 * Progress Button Design Options (Input)
 */
export interface ProgressButtonDesign {
  /**
   * The background of the button
   */
  background?: string;
  /**
   * The text color of the button
   */
  color?: string;
  /**
   * The background of the button when status is success
   */
  successBackground?: string;
  /**
   * The background of the button when status is error
   */
  errorBackground?: string;
  /**
   * The color of the icon when status is success
   */
  successIconColor?: string;
  /**
   * The color of the icon when status is error
   */
  errorIconColor?: string;
  /**
   * The background of the progress element
   */
  progressBackground?: string;
  /**
   * The background of the progress inner element
   */
  progressInnerBackground?: string;
  /**
   * The size in px of the progress lines. This value is used in the animation styles top-line and lateral-lines
   */
  linesSize?: number;
  /**
   * Sets rounded shape to button with given radius size
   */
  radius?: number;
}

/**
 * Progress Button Data (Input)
 */
export interface ProgressButtonData {
  /**
   * Defines the progress animation style
   */
  animation?: ProgressButtonAnimation;
  /**
   * Defines the progress animation direction
   */
  direction?: ProgressButtonDirection;
  /**
   * Time in ms that the status (success or error) will be displayed
   */
  statusTime?: number;
}

@Injectable({
  providedIn: 'root'
})
/**
 * Button Config used to initialize button options
 */
export class ProgressButtonConfig {
  progress: ProgressButtonData = {
    animation: 'fill',
    direction: 'horizontal',
    statusTime: 1500,
  };
  design: ProgressButtonDesign = {
    background: '#222222',
    color: '#FFFFFF',
    successBackground: '#00e175',
    errorBackground: '#ff2948',
    successIconColor: '#ffffff',
    errorIconColor: '#ffffff',
    progressBackground: '#000000',
    progressInnerBackground: 'rgba(255, 255, 255,0.5)',
    linesSize: 10,
    radius: 0
  };
}

/**
 * Progress Status Data
 */
export interface ProgressButtonDataStatus {
  perspective?: '' | null;
  isPerspective: boolean;
  isBorderRadius: boolean;
  isRotateAnimation: boolean;
  isFlipAnimation: boolean;
  isSlideDownAnimation: boolean;
  isMoveUpAnimation: boolean;
  isContentBackground: boolean;
  isHorizontal: boolean;
}

/**
 * Styles of Button elements
 */
export interface ProgressButtonStyles {
  progressInner: any;
  button: any;
  content: any;
}

/**
 * Optional Configuration Data passed to the forRoot() method
 */
export interface ProgressButtonModuleConfig {
  progress?: ProgressButtonData;
  design?: ProgressButtonDesign;
}
/**
 * Merge an object with another
 * @param data Object to merge
 * @param source Original object
 */
export function mergeOptions(data: any, source: any) {
  if (data) {
    Object.keys(source).forEach((k) => {
      if ((data[k] !== null && typeof data[k] !== 'undefined' && data[k] !== '')) {
        source[k] = data[k];
      }
    });
    // Update lateral-lines animation direction to vertical
    if (typeof source !== 'undefined' && source.animation && source.animation === 'lateral-lines') {
      source.direction = 'vertical';
    }
  }
  return source;
}

// Token that makes the raw options available to the following factory function.
export let FOR_ROOT_CONFIG_TOKEN = new InjectionToken<ProgressButtonModuleConfig>('forRoot() ProgressButtonService configuration.');

/**
 * Return an instance of ProgressButtonConfig
 * @param config The button config for the module
 * @return ProgressButtonConfig;
 */
export function progressButtonConfigFactory(config?: ProgressButtonModuleConfig): ProgressButtonConfig {
  const options = new ProgressButtonConfig();
  if (config) {
    options.progress = mergeOptions(config.progress, options.progress);
    options.design = mergeOptions(config.design, options.design);
  }
  return (options);
}
