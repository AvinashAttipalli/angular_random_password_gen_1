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
    let generatedPassword = '';
    let includeTypes ='';
    const letters = "abcdefghijklmniopqrstuvwxyz";
    const numbers = "1234567890";
    const specialKeys = "!@#$%^&*()";
    
    if(this.useLetters){
      includeTypes +=letters;
    }

    if(this.useNumbers){
      includeTypes +=numbers;
    }

    if(this.specialChars){
      includeTypes +=specialKeys;
    }

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random()*includeTypes.length);
      generatedPassword +=includeTypes[index];
    }

    this.password = generatedPassword;

  }

  getNewPassword() {
    return this.password;
  }

  isButtonEnable(){
    if(this.length && (this.useLetters || this.useNumbers || this.specialChars)){
      return false;
    }
    return true;
  }

  onClearButton(){
    this.password = '';
  }

  isClearBtnEnable(){

    if(this.password.length>0){
    return false;
    }
    return true;
  }

}

