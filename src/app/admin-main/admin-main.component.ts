import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() { }
  page=1;
  pageName='Product Upload'
  ngOnInit(): void {
  }
  onClickPage(val:any){
    this.page=val;
    if(val==1){
      this.pageName ='Product Upload'
    }else if(val==2){
      this.pageName='Product Lists'
    }

}
}
