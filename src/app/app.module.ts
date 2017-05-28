import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// integrated new file AccountsList into the whole app
import { AccountsList } from './account/accounts_list.component';

// integrated new file AccountForm into whole app
import { AccountForm } from './account/account_form.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList, AccountForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
