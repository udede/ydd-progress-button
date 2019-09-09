import {Inject, Injectable, Optional} from '@angular/core';
import {ProgressButtonConfig, ProgressButtonData, ProgressButtonDesign} from './progress-button.types';

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
      errorBackground: '#ff0c00',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#000000',
      progressInnerBackground: '#555555',
      linesSize: 10
    }
  };
  private progressP: ProgressButtonData;
  private designP: ProgressButtonDesign;

  constructor(@Optional() @Inject('config') config: ProgressButtonConfig) {
    this.init(config);
  }

  private init(config: ProgressButtonConfig) {
    this.progressP = this.default.progress;
    this.designP = this.default.design;
    if (config) {
      if (config.progress) {
        this.progressP = this.safeMerge(this.progressP, config.progress);
      }
      if (config.design) {
        this.designP = this.safeMerge(this.designP, config.design);
      }
    }
  }

  private safeMerge(original, substitute) {
    const ret = {};
    if (substitute) {
      Object.keys(original).forEach((k) => {
        ret[k] = (substitute[k]) ? substitute[k] : original[k];
      });
    } else {
      return original;
    }
    return ret;
  }

  get design(): ProgressButtonDesign {
    return this.designP;
  }

  set design(value: ProgressButtonDesign) {
    this.designP = this.safeMerge(this.designP, value);
  }

  get progress(): ProgressButtonData {
    return this.progressP;
  }

  set progress(value: ProgressButtonData) {
    this.progressP = this.safeMerge(this.progressP, value);
    this.progressP.direction = (this.progressP.animation === 'lateral-lines') ? 'vertical' : this.progressP.direction;
  }

}
