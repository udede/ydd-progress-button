import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ProgressButtonDesign,
  ProgressButtonForm,
  ProgressButtonStatus,
  ProgressButtonType,
  ProgressButtonData, ProgressButtonDataStatus, ProgressButtonStyles
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
export class ProgressButtonComponent {

  private progressP: ProgressButtonData;
  private designP: ProgressButtonDesign;

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
   * Return the status of the progress data
   */
  get status(): ProgressButtonDataStatus {
    return this.service.status;
  }

  /**
   * Return styles of the button and its components
   */
  get styles(): ProgressButtonStyles {
    return this.service.styles(this.progressValue, this.statusClass);
  }

  /**
   * Execute click action
   */
  click = () => {
    this.action.emit(this);
  };

  /**
   * Init the progress component
   */
  progressInit = () => {
    this.disabled = true;
    this.loading = true;
    this.noTransition = false;
    this.progressValue = 0;
  };

  /**
   * Stop the progress animation
   * @param status ProgressButtonStatus State of stop (error, success)
   * @return Observable An observable with after-init and complete steps
   */
  progressStop = (status: ProgressButtonStatus): Observable<string> => {
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
  };

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

}
