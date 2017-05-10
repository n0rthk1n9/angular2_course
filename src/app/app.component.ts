import { Component } from '@angular/core';
// integrate account class
import { Account } from './account.model';

@Component({
  selector: 'my-app',
  // url to html file to load when app starts
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
  // styles: ['.blue-bg{ background-color: blue; }']
})

// export class so that it can be imported from anywhere
export class AppComponent  {

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

  // variable to get a unique id for each Account in acconts array
  private _nextId = 3

  // method to create a new instance of Account in the accounts array with the
  // constructor of class Account. New instance of Account is pushed into accounts
  // array. After this inputfields of website are set to blank and zero
  private createAcc(title: any, description: any, balance: any) {
    this._accounts.push(new Account(this._nextId, title.value, description.value, balance.value))
    // push selected state of account to selected array
    this._selected.push(false)
    this._nextId++

    title.value = ""
    description.value = ""
    balance.value = 0
  }

  // remove one instance of Account class from array accounts
  private removeAcc(index: number) {
    this._accounts.splice(index, 1)
    // remove selected status from selected array
    this._selected.splice(index, 1)
  }

  private select(index: number) {
    this._selected[index] = !this._selected[index]
  }

  // instance of interface User filled with data
  // private currentUser: User = { username: "angularpro", email: "angularpro@gmail.com" }

  // variable for hiding email
  // private hideEmail: boolean = true

  // // variable for saving input state of input field
  // private disabledInput: boolean = true
  // // funtcion to return value of input state variable
  // private isDisabled(): boolean {
  //   return this.disabledInput
  // }
  //
  // // variable for saving state of blue background color
  // private isBlueBg: boolean = true
  // // variable for storing background color
  // private bgColor: string = 'red'

  // change value of hideEmail
  // private toggle() {
  //   this.hideEmail = !this.hideEmail
  // }

  // array of type User (interface below) which contains 4 different users
  // private users: Array<User> = [
  //   { username: "Jan" , email: "jan@apple.com" },
  //   { username: "Maike" , email: "maike@apple.com" },
  //   { username: "Balou" , email: "balou@apple.com" },
  //   { username: "Pumbaa" , email: "pumbaa@apple.com" }
  // ]

  // private changeMail(newMail: string) {
  //   this.currentUser.email = newMail
  // }
  //
  // private keyPressed(event: KeyboardEvent) {
  //   if (event.keyCode == 13) {
  //     var inputElement = <HTMLInputElement>event.target
  //     this.changeMail(inputElement.value)
  //   }
  // }

}

// declaration of interface User with its propertys
// interface User {
//   username: string,
//   email: string
// }
