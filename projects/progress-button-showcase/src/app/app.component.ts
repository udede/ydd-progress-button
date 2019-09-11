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
  isSidebarSettingsOpen = false;
  clipboardCopied = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      animation: 'fill',
      direction: 'horizontal',
      status: 'success',
      background: '#516bf0',
      color: '#FFFFFF',
      successBackground: 'linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(115,189,45,1) 100%)',
      errorBackground: 'linear-gradient(to right, rgba(255,93,177,1) 0%, rgba(239,1,124,1) 100%)',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#4053AA',
      progressInnerBackground: 'rgba(0, 0, 0,0.5)',
      radius: '50',
      linesSize: '5'
    });
  }

  isLinesSize = () => {
    return ((this.progressData.animation === 'top-line') || (this.progressData.animation === 'lateral-lines'));
  };

  isRotateAnimation = () => {
    return (this.progressData.animation.includes('rotate-'));
  };

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
      progressInnerBackground: this.settingsForm.value.progressInnerBackground,
      radius: parseInt(this.settingsForm.value.radius, 10),
      linesSize: parseInt(this.settingsForm.value.linesSize, 10)
    };
  }

  copyClipboard = (val: string) => {
    if (!this.clipboardCopied) {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.clipboardCopied = true;
      const t = setTimeout(() => {
        this.clipboardCopied = false;
        clearTimeout(t);
      }, 1000);
    }
  };


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
