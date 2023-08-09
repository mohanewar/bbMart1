import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth) { }

  signInWithGoogle(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider());
  }
  registerWithEmailAndPassword(user:{email:string,password:string}){
    return this.fireauth.createUserWithEmailAndPassword(user.email,user.password);
  }
  signInWithEmailAndPAssword(user:{email:string,password:string}){
    return this.fireauth.signInWithEmailAndPassword(user.email,user.password);
  }
}

