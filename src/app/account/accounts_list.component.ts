import { Component } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})

// created a new seperated file for things related to the account list displayed
// on the webpage
export class AccountsList {
  // create array of type Account with two instances of Account in it created in
  // two different ways, first by connecting values directly to the parameters
  // and second using the constructor of Account
  private _accounts: Array<Account> = [
    {
      id: 1,
      title: "N26 Bank",
      description: "Das ist mein Standard Account",
      balance: 3496.23
    },
    new Account(2, "Züricher Kantonalbank", "Mein geheimes schweizer Nummernkonto", 102348.23)
  ]

  private _selected: Array<boolean> = [false, false]

  // remove one instance of Account class from array accounts
  private removeAcc(index: number) {
    this._accounts.splice(index, 1)
    // remove selected status from selected array
    this._selected.splice(index, 1)
  }

  private select(index: number) {
    this._selected[index] = !this._selected[index]
  }
}
