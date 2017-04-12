import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // url to html file to load when app starts
  templateUrl: 'app/app.component.html'
})

// export class so that it can be imported from anywhere
export class AppComponent  {

  // new string for storing username
  private username: string = "angularpro"
  // instance of interface User filled with data
  private currentUser: User = { username: "angularpro", email: "angularpro@gmail.com" }

  // getter for the username of instance of User interface
  private getUsername():string {
    return this.currentUser.username
  }
}

// declaration of interface User with its propertys
interface User {
  username: string,
  email: string
}
