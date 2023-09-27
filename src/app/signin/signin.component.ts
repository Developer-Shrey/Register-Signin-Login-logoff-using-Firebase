import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {


email:string = '';
password:string = '';

constructor (private auth :AuthService) {   }
 
signin() {

if (this.email == '') {
alert('Please enter the email');
return;
}

if (this.password == '') {
  alert('Please enter the password');
  return;
  }


this.auth.signin(this.email,this.password);

this.email = '';
this.password = '';


}

}
