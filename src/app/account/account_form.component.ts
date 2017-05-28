import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'account-form',
  templateUrl: 'app/account/account_form.component.html',
  styleUrls: ['app/account/account_form.component.css']
})

export class AccountForm {

  @Output() created = new EventEmitter<Account>();

  private createAcc(title: any, description: any, balance: any) {
    var newAccount: Account = new Account(0, title.value, description.value, balance.value);
    this.created.emit(newAccount);

    title.value = "";
    description.value = "";
    balance.value = 0;
  }



}
