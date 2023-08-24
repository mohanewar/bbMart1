import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router:ActivatedRoute,private authService:AuthService) { }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe(res => {
      console.log(res) //will give query params as an object
      this.code = res['oobCode']
      console.log(this.code)
    })
  
  }
  code: any;
  newPassword: any;

  async resetPassword() {
    let result
    await this.authService.resetPassword(this.code, this.newPassword)
    console.log("reset");

  }
  enterLog(event: any) {
    if (event.keyCode === 13) {
      // this.login();
      this.resetPassword();
    }
  }
}
