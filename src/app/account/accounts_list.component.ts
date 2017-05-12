import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})

// created a new seperated file for things related to the account list displayed
// on the webpage
export class AccountsList {

  // @Input flag opens variable _accounts for input from accounts
  @Input('accounts') _accounts: Array<Account>;

  // EventEmitter on which other services or components can subscribe
  @Output('delete') delete = new EventEmitter<Number>();

  // event emitter emits index of bank account that should be deleted
  private _remove(index: number) {
    this.delete.emit(index)
  }

}
