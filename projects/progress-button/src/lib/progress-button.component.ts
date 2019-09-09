import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ProgressButtonDesign,
  ProgressButtonForm,
  ProgressButtonStatus,
  ProgressButtonType,
  ProgressButtonData, ProgressButtonAnimation
} from './progress-button.types';
import {Observable} from 'rxjs';
import {ProgressButtonService} from './progress-button.service';

@Component({
  selector: 'ydd-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: [
    './progress-button.component.vars.scss',
    './progress-button.component.scss',
    './progress-button.component.styles.scss']
})
export class ProgressButtonComponent implements OnInit {


  private progressP: ProgressButtonData;
  private designP: ProgressButtonDesign;

  /** Public Props */
  progressValue = 0;
  loading = false;
  noTransition = false;
  statusClass = '';

  /**
   * Specifies a name for the button
   */
  @Input() name: string;
  /**
   * Specifies an initial value for the button
   */
  @Input() value: string;
  /**
   * Specifies the type of button
   */
  @Input() type: ProgressButtonType = 'button';
  /**
   * Specifies that a button should automatically get focus when the page loads
   */
  @Input() autofocus = null;
  /**
   * Specifies that a button should be disabled
   */
  @Input() disabled = null;
  /**
   * Specifies form parameters for the button
   */
  @Input() form: ProgressButtonForm;

  /**
   *  Fires on a mouse click on the element
   */
  @Output() action = new EventEmitter();

  constructor(private service: ProgressButtonService) {
    this.progress = this.service.progress;
    this.design = this.service.design;
  }

  /**
   * Execute click action
   */
  click() {
    this.action.emit(this);
  }

  /**
   * Init the progress component
   */
  progressInit() {
    this.disabled = true;
    this.loading = true;
    this.noTransition = false;
    this.progressValue = 0;
  }

  /**
   * Stop the progress animation
   * @param status ProgressButtonStatus State of stop (error, success)
   * @return Observable An observable with after-init and complete steps
   */
  progressStop(status: ProgressButtonStatus): Observable<string> {
    return new Observable((observer) => {
      observer.next('before-init');
      const tim1 = setTimeout(() => {
        this.noTransition = true;
        this.progressValue = 0;
        this.loading = false;
        this.statusClass = ('state-' + status);
        observer.next('after-init');
        const tim2 = setTimeout(() => {
          this.statusClass = '';
          this.disabled = null;
          observer.complete();
          clearTimeout(tim1);
          clearTimeout(tim2);
        }, this.progress.statusTime);
      }, 300);
    });
  }

  /**
   * Tell if the progress is 3d perspective
   * @return mix The attribute data-perspective value
   */
  get perspective() {
    return (this.progress.animation.includes('rotate-') || this.progress.animation.includes('flip-')) ? '' : null;
  }

  /**
   * Get css style of the button
   */
  get buttonStyle() {
    return {
      background: (this.perspective === null) ? this.mainBackgroundColor : null,
      color: this.design.color
    };
  }

  /**
   * Get the background color of the button according to the status
   */
  get mainBackgroundColor() {
    let bg = this.design.background;
    switch (this.statusClass) {
      case 'state-success':
        bg = this.design.successBackground;
        break;
      case 'state-error':
        bg = this.design.errorBackground;
        break;
    }
    return bg;
  }

  /**
   * Get the content style according to the status
   */
  get contentStyle() {
    return {
      background: (this.perspective === '' || this.isAnimation('slide-down') || this.isAnimation('move-up')) ?
        this.mainBackgroundColor : null,
      color: this.design.color
    };
  }

  /**
   * Get the Progress Inner Style
   */
  get progressInnerStyle() {

    const style = {
      background: this.design.progressInnerBackground,
      borderColor: null,
      borderLeftWidth: null,
      borderRightWidth: null,
      height: null,
      width: null,
    };

    // Reset LinesSize
    if (this.design.linesSize === null) {
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
    style.height = this.progressInnerHeight;
    style.width = this.progressInnerWidth;

    return style;
  }

  /**
   * Get Calculated Progress Inner Width
   */
  get progressInnerWidth() {
    if (this.progress.direction === 'horizontal') {
      return this.progressValue + '%';
    }
    if (this.isAnimation('top-line')) {
      return this.design.linesSize + 'px';
    }
    return null;
  }

  /**
   * Get Calculated Progress Inner Height
   */
  get progressInnerHeight() {
    if (this.progress.direction === 'vertical') {
      return this.progressValue + '%';
    }
    if (this.isAnimation('top-line')) {
      return this.design.linesSize + 'px';
    }
    return null;
  }

  /**
   * Check if animation is active
   * @param name ProgressButtonAnimation Animation name
   */
  isAnimation(name: ProgressButtonAnimation) {
    return (this.progress.animation === name);
  }

  /**
   * Progress Button Data
   * @param progress ProgressButtonData The Progress Button Data
   */
  @Input()
  set progress(progress: ProgressButtonData) {
    this.service.progress = progress;
    this.progressP = this.service.progress;
  }

  /**
   * The Progress Button Data
   */
  get progress(): ProgressButtonData {
    return this.progressP;
  }

  /**
   * Progress Button Design
   * @param design ProgressButtonDesign The Progress Button Design
   */
  @Input()
  set design(design: ProgressButtonDesign) {
    this.service.design = design;
    this.designP = this.service.design;
  }

  /**
   * The Progress Button Design
   */
  get design(): ProgressButtonDesign {
    return this.designP;
  }

  ngOnInit() {
  }

}
