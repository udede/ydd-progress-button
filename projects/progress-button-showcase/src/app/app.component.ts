import {Component, OnInit} from '@angular/core';
import {ProgressButtonComponent} from '../../../progress-button/src/lib/progress-button.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      animation: 'fill',
      direction: 'horizontal',
      status: 'success',
      background: '#222222',
      color: '#FFFFFF',
      successBackground: '#00e175',
      errorBackground: '#ff0c00',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#000000',
      progressInnerBackground: '#555555'
    });
  }

  get progressData() {
    return {
      animation: this.settingsForm.value.animation,
      direction: this.settingsForm.value.direction,
    };
  }

  get designData() {
    return {
      background: this.settingsForm.value.background,
      color: this.settingsForm.value.color,
      successBackground: this.settingsForm.value.successBackground,
      errorBackground: this.settingsForm.value.errorBackground,
      successIconColor: this.settingsForm.value.successIconColor,
      errorIconColor: this.settingsForm.value.errorIconColor,
      progressBackground: this.settingsForm.value.progressBackground,
      progressInnerBackground: this.settingsForm.value.progressInnerBackground
    };
  }


  run(instance: ProgressButtonComponent) {
    let progress = 0;
    instance.progressInit();
    const interval = setInterval(() => {
      progress += 5;
      instance.progressValue = progress;
      if (progress === 100) {
        const sub = instance.progressStop(this.settingsForm.value.status).subscribe({
          complete(): void {
            sub.unsubscribe();
          }
        });
        clearInterval(interval);
      }
    }, 200);
  }
}
