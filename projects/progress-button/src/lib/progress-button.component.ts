import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ProgressButtonDesign,
  ProgressButtonForm,
  ProgressButtonStatus,
  ProgressButtonType,
  ProgressButtonData, ProgressButtonAnimation
} from './progress-button.types';
import {Observable} from 'rxjs';

@Component({
  selector: 'ydd-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: [
    './progress-button.component.vars.scss',
    './progress-button.component.scss',
    './progress-button.component.styles.scss']
})
export class ProgressButtonComponent implements OnInit {

  /** PRIVATE */
  private progressDefault: ProgressButtonData = {
    animation: 'fill',
    direction: 'horizontal',
    statusTime: 1500,
  };

  private designDefault: ProgressButtonDesign = {
    background: '#222222',
    color: '#FFFFFF',
    successBackground: '#00e175',
    errorBackground: '#ff0c00',
    successIconColor: '#ffffff',
    errorIconColor: '#ffffff',
    progressBackground: '#000000',
    progressInnerBackground: '#555555',
    linesSize: 10
  };

  private progressValueP = 0;
  private statusClassP = '';
  private progressP: ProgressButtonData = this.progressDefault;
  private designP: ProgressButtonDesign = this.designDefault;
  private loadingP = false;
  private noTransitionP = false;

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

  constructor() {
  }

  click() {
    this.action.emit(this);
  }

  /**
   * Init the progress component
   */
  progressInit() {
    this.disabled = true;
    this.loadingP = true;
    this.noTransitionP = false;
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
        this.noTransitionP = true;
        this.progressValue = 0;
        this.loadingP = false;
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

  get buttonStyle() {
    return {
      background: (this.perspective === null) ? this.mainBackgroundColor : null,
      color: this.design.color
    };
  }


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

  get contentStyle() {
    return {
      background: (this.perspective === '' || this.isAnimation('slide-down') || this.isAnimation('move-up')) ?
        this.mainBackgroundColor : null,
      color: this.design.color
    };
  }

  /**
   * The Progress Inner Style
   */
  get progressInnerStyle() {
    return {
      background: (!this.isAnimation('lateral-lines')) ? this.design.progressInnerBackground : null,
      borderColor: (this.isAnimation('lateral-lines')) ? this.design.progressInnerBackground : null,
      borderLeftWidth: (this.isAnimation('lateral-lines') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
      borderRightWidth: (this.isAnimation('lateral-lines') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
      height: (!this.isHorizontal()) ? this.progressValueP + '%' :
        (this.isAnimation('top-line') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
      width: (this.isHorizontal()) ? this.progressValueP + '%' :
        (this.isAnimation('top-line') && this.design.linesSize) ? this.design.linesSize + 'px' : null,
    };
  }

  /**
   * Check if animation is active
   * @param name ProgressButtonAnimation Animation name
   */
  isAnimation(name: ProgressButtonAnimation) {
    return (this.progress.animation === name);
  }

  /**
   * Check if progress direction is horizontal
   */
  isHorizontal() {
    return (this.progress.direction === 'horizontal');
  }

  /**
   * Check if vertical direction is forced
   */

  isForcedVerticalDirection() {
    return (this.progress.animation === 'lateral-lines');
  }

  /**
   * Progress Button Data
   * @param progress ProgressButtonData The Progress Button Data
   */
  @Input()
  set progress(progress: ProgressButtonData) {
    this.progressP = Object.assign({}, this.progressDefault, progress);
    this.progressP.direction = (this.isForcedVerticalDirection()) ? 'vertical' : this.progressP.direction;
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
    this.designP = Object.assign({}, this.designDefault, design);
  }

  /**
   * The Progress Button Design
   */
  get design(): ProgressButtonDesign {
    return this.designP;
  }

  /**
   * Get the status class
   */
  get statusClass(): string {
    return this.statusClassP;
  }

  /**
   * Set the status class
   * @param value The status class
   */
  set statusClass(value: string) {
    this.statusClassP = value;
  }

  get progressValue(): number {
    return this.progressValueP;
  }

  set progressValue(value: number) {
    this.progressValueP = value;
  }

  get noTransition(): boolean {
    return this.noTransitionP;
  }

  get loading(): boolean {
    return this.loadingP;
  }

  ngOnInit() {
  }

}
