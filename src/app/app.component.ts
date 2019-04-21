import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  keyValue = '';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  inpurtValue(event: KeyboardEvent) {
    if (this.isNumber(event.keyCode) ||
        this.isWord(event.keyCode)   ) {
      this.keyValue += event.key;
    }
    if (event.key === 'Escape') {
      this.keyValue = '';
    }
  }
  isNumber(keycode: number){
    let result = false;
    if (keycode >= 48 && keycode <= 57) {
      result =  true;
    }
    return result;
  }

  isWord(keycode: number) {
    let result = false;
    if (keycode >= 65 && keycode <= 90) {
      result =  true;
    }
    return result;
  }
}
