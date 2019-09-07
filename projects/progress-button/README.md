# Angular Progress Button
This represents a button element where the button itself serves as a progress indicator. You can choose from 16 types of animations. 3D animation styles are used for showing the progress indication on one side of the button while rotating the button in perspective.

![preview](https://raw.githubusercontent.com/udede/ydd-progress-button/master/preview.gif)

* See [Demo](https://udede.github.io/ydd-progress-button/)

Table of contents
=================

  * [Features](#features)
  * [Getting started](#getting-started)
  * [Usage](#usage-sample)
  * [API](#api)
  * [Support](#support)
  * [License](#license)

## Features
- [x] Choose from 16 different types of progress animations
- [x] Choose the direction of the progress animation
- [x] Manage success and error statuses
- [x] Setup all the layout variables

## Getting started
### Step 1: Install `progress-button`:
```shell
npm i progress-button
```
### Step 2: Import `ProgressButtonModule`:
```js
import {ProgressButtonModule} from 'progress-button';

@NgModule({
  declarations: [AppComponent],
  imports: [ProgressButtonModule],
  bootstrap: [AppComponent]
})
export class ProgressButtonShowcaseModule {}
```
### Usage sample

```html
<ydd-progress-button 
    (action)="run($event)" 
    [progress]="progressData" 
    [design]="designData">
    Submit
</ydd-progress-button>

```
```javascript

let progressData = {
    animation: 'shrink',
    direction: 'vertical',
}
  
let designData = {
    background: '#222222',
    color: '#FFFFFF',
    successBackground: '#00e175',
    errorBackground: '#ff0c00',
    successIconColor: '#ffffff',
    errorIconColor: '#ffffff',
    progressBackground: '#000000',
    progressInnerBackground: '#555555'
}

run = (instance)=>{
    let progress = 0;
    // initialize the progress
    instance.progressInit();
    // This is an example of interval useful to set the progress value
    const interval = setInterval(() => {
      progress += 5;
      // set the progress value
      instance.progressValue = progress;
      if (progress === 100) {
        // stop the progress with success status
        const sub = instance.progressStop('success').subscribe({
          complete() {
            sub.unsubscribe();
          }
        });
        clearInterval(interval);
      }
    }, 200);
  }

```

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | `string`, `null`  | `null` | no | A name for the button. |
| value | `string`, `null` |  `null` | no | An initial value for the button. |
| type  | `button`, `reset`, `submit` | `button` | no |  The type of button.  |
| autofocus | `true`, `null`  | `null` | no | Specifies that a button should automatically get focus when the page loads. |
| disabled  | `true`, `null`  | `null` | no | Specifies that a button should be disabled.  |
| [form] | [ProgressButtonForm](#ProgressButtonForm) |  | no |  Form parameters for the button. |
| [progress] | [ProgressButtonData](#ProgressButtonData) | | no | Specifies progress parameters. |
| [design] | [ProgressButtonDesign](#ProgressButtonDesign) | | no |  Specifies button and progress design |

##### ProgressButtonForm
| Property  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | `string`, `null` | `null` | no | Specifies one or more forms the button belongs to. |
| action | `string`, `null` |  `null` | no | Specifies where to send the form-data when a form is submitted. Only for `type="submit"`. |
| noValidate  | `boolean`, `null` | `button` | no |  Specifies that the form-data should not be validated on submission. Only for `type="submit"`.  |
| enctype | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`, `null` | `null` | no | Specifies how form-data should be encoded before sending it to a server. Only for `type="submit"`.  |
| method  | `get`,`post`, `null` | `null` | no | Specifies how to send the form-data (which HTTP method to use). Only for `type="submit"`.  |
| target | `_blank`, `_self`, `_parent`, `_top`, `null` | `null` | no |  Specifies where to display the response after submitting the form. Only for `type="submit"`.  |

##### ProgressButtonData
| Property  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| animation | `fill`, `shrink`, `rotate-angle-bottom`, `rotate-angle-top`, `rotate-angle-left`, `rotate-angle-right`, `rotate-side-down`, `rotate-side-up`, `rotate-side-left`, `rotate-side-right`, `rotate-back`, `flip-open`, `slide-down`, `move-up`, `top-line`, `lateral-lines` | `fill` | no | Defines the progress animation style. |
| direction | `horizontal`, `vertical` |  `horizontal` | no | Defines the progress animation direction. |
| statusTime  | `number` | `1500` | no |  Time in ms that the status (`success` or `error`) will be displayed.  |

##### ProgressButtonDesign
| Property  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| background | `string (css color)` | `#222222` | no | The background of the button. |
| color | `string (css color)`|  `#FFFFFF` | no | The text color of the button. |
| successBackground  | `string (css color)` | `#00E175` | no |  The background of the button when status is success.  |
| errorBackground | `string (css color)`| `#FF0C00` | no | The background of the button when status is error.  |
| successIconColor  | `string (css color)` | `#FFFFFF` | no | The color of the icon when status is success.  |
| errorIconColor | `string (css color)` | `#FFFFFF` | no |  The color of the icon when status is error.  |
| progressBackground  | `string (css color)` | `#000000` | no | The background of the progress element.  |
| progressInnerBackground | `string (css color)` | `#555555` | no |  The background of the progress inner element.  |
| linesSize | `number` | `10` | no |  The size in px of the progress lines. This value is used in the animation styles `top-line` and `lateral-lines`.  |

### Outputs
| Output  | Params | Description |
| ------------- | ------------- | ------------- |
| (action) | `ProgressButtonComponent` | Fires on a mouse click on the element. |

### Methods `ProgressButtonComponent`
| Method  | Params | Description |
| ------------- | ------------- | ------------- |
| progressInit  | | Initialize the progress component. You can use it inside the `action` Output |
| progressStop | `success` or `error` | Stop the progress component. You can use it inside the `action` Output. |

### Properties `ProgressButtonComponent`
| Name  | Description |
| ------------- | ------------- |
| progressValue | Useful to change the value of the progress. You can use it inside the `action` Output |

## Support
If this project help you reduce time to develop, you can give me a cup of coffee :)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SFS56GER4N4WW&source=url)

### Author
* [Francesco Lisandro](https://www.linkedin.com/in/francescolisandro/)

### Credits
This angular component is liberally inspired to [Progress Button Styles](https://tympanus.net/Development/ProgressButtonStyles/) of Mary Lou.

## License

This project is licensed under the terms of the MIT license.
