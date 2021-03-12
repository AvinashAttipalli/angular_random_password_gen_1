import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password: string;
  useLetters: boolean;
  useNumbers: boolean;
  specialChars: boolean;
  length: number;

  constructor() {
    this.password = "";
    this.useLetters = false;
    this.useNumbers = false;
    this.specialChars = false;
    this.length = 0;
  }

  onLettersChange() {
    this.useLetters = !this.useLetters;
  }

  onNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onSpecialCharChange() {
    this.specialChars = !this.specialChars;
  }

  onPasswordLength(value: string) {
    var parsedValue = parseInt(value, 0);
    //console.log(parsedValue);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    console.clear();
    console.log("letters: " + this.useLetters);
    console.log("numbers: " + this.useNumbers);
    console.log("specialChars: " + this.specialChars);

    console.log(`Length of the password: ${this.length}`);

    this.password = "My New Password!";
  }

  getNewPassword() {
    return this.password;
  }
}

