import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // url to html file to load when app starts
  templateUrl: 'app/app.component.html'
})

// export class so that it can be imported from anywhere
export class AppComponent  { name = 'Angular'; }
