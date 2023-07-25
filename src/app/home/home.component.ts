import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private router:ActivatedRoute) { }
  showUserName=false;
  userAfterLogin='user'
  pagename = 'user'

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
isViewProd=false;
  passViewName:any;
  viewProdList(value:any){
    this.isViewProd=true;
    this.passViewName = value
  }
}
