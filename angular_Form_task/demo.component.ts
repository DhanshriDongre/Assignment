import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{

  customerForm : FormGroup = new FormGroup({
    fname :  new FormControl('', Validators.required),
    lname :  new FormControl('', Validators.required),
    city :  new FormControl('',  [Validators.minLength(3), Validators.maxLength(10)]),
    email :  new FormControl('', Validators.email),
    pincode :  new FormControl('', Validators.pattern("\\d{6}")),
    checkb :  new FormControl('', Validators.requiredTrue),
  });


  result:string  = "";

  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      console.log(this.customerForm.value);
      this.result = this.customerForm.value;
  }


}