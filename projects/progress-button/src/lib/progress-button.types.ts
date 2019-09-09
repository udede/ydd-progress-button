import {ProgressButtonService} from './progress-button.service';

export type ProgressButtonType = 'button' | 'reset' | 'submit';
export type ProgressButtonDirection = 'horizontal' | 'vertical';
export type ProgressButtonStatus = 'success' | 'error';
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
}

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

export interface ProgressButtonConfig {
  progress?: ProgressButtonData;
  design?: ProgressButtonDesign;
}

export function progressButtonServiceFactory(config) {
  const service = () => new ProgressButtonService(config);
  return service;
}
