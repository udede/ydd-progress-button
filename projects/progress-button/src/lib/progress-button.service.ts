import {Inject, Injectable, Optional} from '@angular/core';
import {
  ProgressButtonAnimation,
  ProgressButtonConfig,
  ProgressButtonData,
  ProgressButtonDataStatus,
  ProgressButtonDesign, ProgressButtonStyles
} from './progress-button.types';

@Injectable({
  providedIn: 'root'
})
export class ProgressButtonService {

  private default: { progress: ProgressButtonData, design: ProgressButtonDesign } = {
    progress: {
      animation: 'fill',
      direction: 'horizontal',
      statusTime: 1500,
    },
    design: {
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
    }
  };
  private progressP: ProgressButtonData;
  private designP: ProgressButtonDesign;

  constructor(@Optional() @Inject('config') config: ProgressButtonConfig) {
    this.init(config);
  }

  /**
   * Initializes ProgressButtonService
   * @param config ProgressButtonConfig
   */
  private init = (config: ProgressButtonConfig) => {
    this.progressP = this.default.progress;
    this.designP = this.default.design;
    if (config) {
      if (config.progress) {
        this.progressP = this.merge(this.progressP, config.progress);
      }
      if (config.design) {
        this.designP = this.merge(this.designP, config.design);
      }
    }
  };

  /**
   * Merge properties of object to source
   * @param object The destination object
   * @param source The source objects
   */
  private merge = (object: ProgressButtonData | ProgressButtonDesign,
                   source: ProgressButtonData | ProgressButtonDesign) => {
    const ret = {};
    if (source) {
      Object.keys(object).forEach((k) => {
        ret[k] = (source[k]) ? source[k] : object[k];
      });
    } else {
      return object;
    }
    return ret;
  };

  /**
   * Get design data
   */
  get design(): ProgressButtonDesign {
    return this.designP;
  }

  /**
   * Set the design data
   * @param value ProgressButtonDesign object
   */
  set design(value: ProgressButtonDesign) {
    this.designP = this.merge(this.designP, value);
  }

  /**
   * Get progress data
   */
  get progress(): ProgressButtonData {
    return this.progressP;
  }

  /**
   * Set the progress data
   * @param value ProgressButtonData object
   */
  set progress(value: ProgressButtonData) {
    this.progressP = this.merge(this.progressP, value);
    // If animation is lateral-lines forces vertical direction
    this.progressP.direction = (this.progressP.animation === 'lateral-lines') ? 'vertical' : this.progressP.direction;
  }

  /**
   * Return the status of the data
   */
  get status(): ProgressButtonDataStatus {
    const status = {
      perspective: null,
      isHorizontal: true,
      isPerspective: false,
      isBorderRadius: false,
      isRotateAnimation: false,
      isFlipAnimation: false,
      isSlideDownAnimation: false,
      isMoveUpAnimation: false,
      isContentBackground: false
    };
    status.isHorizontal = (this.progress.direction === 'horizontal');
    status.isRotateAnimation = (this.progress.animation.includes('rotate-'));
    status.isFlipAnimation = (this.progress.animation.includes('flip-'));
    status.isSlideDownAnimation = (this.progress.animation.includes('slide-down'));
    status.isMoveUpAnimation = (this.progress.animation.includes('move-up'));
    status.perspective = (status.isRotateAnimation || status.isFlipAnimation) ? '' : null; // Have progress animation 3D perspective
    status.isPerspective = (status.perspective !== null);
    status.isBorderRadius = (!status.isRotateAnimation && this.design.radius !== null);
    status.isContentBackground = (status.isPerspective || status.isSlideDownAnimation || status.isMoveUpAnimation);
    return status;
  }

  /**
   * Check if animation is active
   * @param name ProgressButtonAnimation Animation name
   */
  isAnimation = (name: ProgressButtonAnimation): boolean => {
    return (this.progress.animation === name);
  };

  /**
   * Return some progress styles
   * @param progressValue The progress value
   * @param statusClass The status (state-success | state-error)
   */
  styles = (progressValue: number, statusClass: string): ProgressButtonStyles => {
    return {
      progressInner: this.progressInnerStyle(progressValue),
      button: this.buttonStyle(statusClass),
      content: this.contentStyle(statusClass)
    };
  };

  /**
   * Get the Progress Inner Style
   * @param progressValue The progress value
   */
  private progressInnerStyle = (progressValue: number) => {

    const style = {
      background: this.design.progressInnerBackground,
      borderColor: null,
      borderLeftWidth: null,
      borderRightWidth: null,
      height: null,
      width: null,
    };

    // Reset LinesSize
    if ((this.design.linesSize === null) || (typeof this.design.linesSize === 'undefined')) {
      this.design.linesSize = 10;
    }

    // Lateral Lines
    if (this.isAnimation('lateral-lines')) {
      style.background = null;
      style.borderColor = this.design.progressInnerBackground;
      style.borderLeftWidth = this.design.linesSize + 'px';
      style.borderRightWidth = this.design.linesSize + 'px';
    }

    // Set Size
    style.height = this.progressInnerHeight(progressValue);
    style.width = this.progressInnerWidth(progressValue);

    return style;
  };

  /**
   * Get Calculated Progress Inner Width
   */
  private progressInnerWidth = (progressValue: number) => {
    if (this.progress.direction === 'horizontal') {
      return progressValue + '%';
    } else {
      if (this.isAnimation('shrink') && this.design.radius) {
        return progressValue + '%';
      }
    }
    if (this.isAnimation('top-line')) {
      return this.design.linesSize + 'px';
    }
    return null;
  };

  /**
   * Get Calculated Progress Inner Height
   */
  private progressInnerHeight = (progressValue: number) => {
    if (this.progress.direction === 'vertical') {
      if (this.isAnimation('shrink') && this.design.radius) {
        return '100%';
      }
      return progressValue + '%';
    }
    if (this.isAnimation('top-line')) {
      return this.design.linesSize + 'px';
    }
    return null;
  };

  /**
   * Get the background color of the button according to the status
   */
  private mainBackgroundColor = (statusClass: string) => {
    let bg = this.design.background;
    switch (statusClass) {
      case 'state-success':
        bg = this.design.successBackground;
        break;
      case 'state-error':
        bg = this.design.errorBackground;
        break;
    }
    return bg;
  };

  /**
   * Get css style of the button
   */
  private buttonStyle = (statusClass: string) => {
    return {
      background: (!this.status.isPerspective) ? this.mainBackgroundColor(statusClass) : null,
      color: this.design.color,
      borderRadius: (this.status.isBorderRadius) ? this.design.radius + 'px' : null,
    };
  };

  /**
   * Get the content style according to the status
   */
  private contentStyle = (statusClass: string) => {
    return {
      background: (this.status.isContentBackground) ? this.mainBackgroundColor(statusClass) : null,
      color: this.design.color,
      borderRadius: (this.status.isBorderRadius) ? this.design.radius + 'px' : null,
    };
  };

}
