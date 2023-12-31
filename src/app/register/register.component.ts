import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:string = '';
  password:string = '';
  
constructor(private auth :AuthService){}

  register(){
    if (this.email == '') {
      alert('Please enter the email');
      return;
      }
      
      if (this.password == '') {
        alert('Please enter the password');
        return;
        }
      
      
      this.auth.registration(this.email,this.password);
      
      this.email = '';
      this.password = '';
      
  }




}
