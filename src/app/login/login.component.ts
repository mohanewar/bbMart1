import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServerapiService } from '../services/serverapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,private api:ServerapiService) { }
  isForget=false;
  otpSec=0
  otpCounter:any;
  userName:any;
  ngOnInit(): void {
  }
  otpTimer(){
    this.otpSec=10;
   this.otpCounter= setInterval(() => {
    if(this.otpSec==0){
      clearInterval(this.otpCounter);

      this.isGetOtp=false;
    }else{
      this.otpSec--;

    }
    }, 1000);
  }
  submitOtp(){
    if (!this.isGetOtp){
      window.alert("Invalid OTP");
      return;
    }
    this.isForget = false;
    clearInterval(this.otpCounter);
    this.otpSec=0

  }
  isGetOtp=false;
  getOtp(){
    this.isGetOtp=true;
    this.otpTimer();
  }
  forgotPass(){
    this.isForget = true;
    this.otpTimer();
  }
  email:any;
  password:any;
  login(){
    this.api.login(this.email,this.password).subscribe((res=>{
      if(res.status==200){
        if (res.data.user_type=='customer'){
          // this.route.navigateByUrl("/home");
          this.route.navigate(['home'], { queryParams: { user: res.data.user } });


        } else if(res.data.user_type == 'admin'){
          this.route.navigate(['adminMain'], { queryParams: { user: res.data.user } });

        } else{
          window.alert("username / password is invalid")
        }

      }else{
        window.alert("username / password is invalid")
      }
    }))
  }
  enterLog(event:any){
    if (event.keyCode === 13 && !this.isSignUp) {
      this.login();
    } else if (event.keyCode === 13 && this.isSignUp) {
      this.signUpNewUser();
    }
  }
  isSignUp=false;
  confirmPassword:any
  signUpWindow(){
    this.isSignUp=true;
  }
  signUp(){

  }
  loginUser() {
    this.isSignUp=false;
    

  }
  signUpNewUser(){
    this.api.addNewUser(this.email, this.password,this.userName).subscribe((res => {
      if (res.status == 200) {
        this.loginUser();
    
      } else if (res.status == 201) {
        window.alert(res.reason);
        this.email=''
        this.userName=''
        this.password=''
        this.confirmPassword=''

      }else{
        window.alert("username / password is invalid")

      }
    }))
  }
  ngOnDestroy(){
    clearInterval(this.otpCounter);
}
}
