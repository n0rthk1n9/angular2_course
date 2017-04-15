import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // url to html file to load when app starts
  templateUrl: 'app/app.component.html',
  styles: ['.blue-bg{ background-color: blue; }']
})

// export class so that it can be imported from anywhere
export class AppComponent  {

  // instance of interface User filled with data
  private currentUser: User = { username: "angularpro", email: "angularpro@gmail.com" }

  // variable for hiding email
  private hideEmail: boolean = true

  // variable for saving input state of input field
  private disabledInput: boolean = true
  // funtcion to return value of input state variable
  private isDisabled(): boolean {
    return this.disabledInput
  }

  // variable for saving state of blue background color
  private isBlueBg: boolean = true
  // variable for storing background color
  private bgColor: string = 'red'
}

// declaration of interface User with its propertys
interface User {
  username: string,
  email: string
}
