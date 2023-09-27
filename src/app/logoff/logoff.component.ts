import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss']
})
export class LogoffComponent {
email:string = '';
password:string = '';

  constructor(private auth :AuthService){ }


  logoff(){

    // if (this.email == '') {
    //   alert('Please enter the email');
    //   return;
    //   }
      
    //   if (this.password == '') {
    //     alert('Please enter the password');
    //     return;
    //     }
      
      
      this.auth.logoff(this.email,this.password);
      
      this.email = '';
      this.password = '';
      
      
      }
      
  }



