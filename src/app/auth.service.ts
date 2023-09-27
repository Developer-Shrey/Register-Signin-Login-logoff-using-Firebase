import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private fireauth : AngularFireAuth, private Router: Router) { }



  // Signin

  signin(email:string,password:string){
     
    this.fireauth.signInWithEmailAndPassword(email,password).then 
    
    (( )=>{
      localStorage.setItem('token','true');
      this.Router.navigate(['home']);
    }, err => { alert('err.message'); 
         this.Router.navigate(['/signin']);
  } )
    
}


// registration

  registration(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then 
    (()=>{    
       alert('Registration done successfully');
       this.Router.navigate(['/signin']);
    },err => {
      alert(err.message);
      this.Router.navigate(['/register']);
    })
  }


  // logoff

logoff(email:string,password:string) 

{
 
  this.fireauth.signOut().then 
    
  ( ( ) => {

    localStorage.removeItem('token');

    this.Router.navigate(['/login']);

  },
  
  err => { alert('err.message'); 
     
  this.Router.navigate(['/signin']); 

} )

}

}
