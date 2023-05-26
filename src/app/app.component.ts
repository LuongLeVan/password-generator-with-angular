import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lowerString: string = 'abcdefghijklmnopqrstuvwxyz';
  upperString: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numberString: string = '0123456789';
  symbolString: string = '!@#$%^&*()_+';
  password: any = '';
  length: number = 8;
  lowerCase: any = '';
  upperCase: any = '';
  numberCase: any = '';
  symbolCase: any = '';
  passwordGenerator: string = '';
  content:string = 'Copy';

  includeLower: boolean = false;
  includeUpper: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;


  ngOnInit(): void {
    

  }

  generateLowerCase() {
    return this.lowerCase = this.lowerString[Math.floor(Math.random() * this.lowerString.length)];
  }

  generateUpperCase() {
    return this.upperCase = this.upperString[Math.floor(Math.random() * this.upperString.length)];
  }

  generateNumber() {
    return this.numberCase = this.numberString[Math.floor(Math.random() * this.numberString.length)];
  }

  generateSymbol() {
    return this.symbolCase = this.symbolString[Math.floor(Math.random() * this.symbolString.length)];
  }

  checkboxLower(e: any) {
    this.includeLower = e.currentTarget.checked;

  }

  checkboxUpper(e: any) {
    this.includeUpper = e.currentTarget.checked;

  }

  checkboxNum(e: any) {
    this.includeNumber = e.currentTarget.checked;

  }

  checkboxSymbol(e: any) {
    this.includeSymbol = e.currentTarget.checked;

  }

  /* Handle Copy */
  handleCopy(){
    this.content = 'Copied';
    
  }

  handleGenerator() {
    this.password = '';
    for (let i = 0; i < this.length; i++) {
      const x = this.handlePassword();
      this.password += x;
    }


    this.password = this.password;
    if(this.password == ''){
      this.password = 'Please select option';
    }
  }

  handlePassword() {
    const xs = [];
    if (this.includeLower) {
      xs.push(this.generateLowerCase());
    }

    if (this.includeUpper) {
      xs.push(this.generateUpperCase());

    }

    if (this.includeNumber) {

      xs.push(this.generateNumber());
    }

    if (this.includeSymbol) {
      xs.push(this.generateSymbol());

    }

    if (xs.length === 0) return "";
    console.log(xs);
   
    return xs[Math.floor(Math.random() * xs.length)];

    



  }


}
