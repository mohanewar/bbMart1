import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn=false;
  constructor(private firebaseAuth: AngularFireAuth, private route: Router) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).
      then(res => {
        this.isLoggedIn= true;
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).
      then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }
  async forgetPassword(email: string) {
    await this.firebaseAuth.sendPasswordResetEmail(email).
      then(res => {
        // this.isLoggedIn = true;

      })
  }
  async resetPassword(code:string, newPassword:string) {
    await this.firebaseAuth.confirmPasswordReset(code,newPassword).
      then(res => {
        // this.isLoggedIn = true;
        this.route.navigateByUrl("/login/login");

        

      },(err)=>{
        console.log(err);
      })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}

