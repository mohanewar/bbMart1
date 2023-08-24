import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private authService: AuthService) { }
  showUserName=false;
  userAfterLogin='user'
  pagename = 'user'
  count=0;
  
  ngOnInit(): void {
   
    this.router.queryParams.subscribe(res => {
      console.log(res) //will give query params as an object
      if (res['user']){
        this.userAfterLogin=  res['user']
        this.showUserName = true;
        console.log(res)

      }else{
        this.showUserName = false;

      }
    })
  }
loginUser(){
  this.route.navigateByUrl("/login/login");
}
  logout() {
    this.authService.logout();
    this.route.navigateByUrl("/login/login");

    // this.isLogout.emit()
  }
isViewProd=false;
  passViewName:any;
  viewProdList(value:any){
    this.isViewProd=true;
    this.passViewName = value
  }
  notifyEvent(data:any){
    console.log('notify data',data)
  }
  viewChildFuction(data: any) {
    console.log('notify data', data)
    this.count=data;
  }
 
}
