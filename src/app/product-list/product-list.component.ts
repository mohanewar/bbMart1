import { Component, Input, OnInit } from '@angular/core';
import { ServerapiService } from '../services/serverapi.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminUploadPageComponent } from '../admin/admin-upload-page/admin-upload-page.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  constructor(private api: ServerapiService, public dialog: MatDialog,private sanitizer:DomSanitizer ) { }
  @Input() prodtype:any;
  @Input() fromPage:any;
  ngOnInit(): void {
    this.getProductList();
   
  }
  productList:any;
  getProductList(){
    this.api.getProductList().subscribe(res=>{
      if(res.status==200){
        this.productList=res.data
        console.log(this.productList);
        let roundOff :any;
        for(let i=0;i<this.productList.length;i++){
           roundOff = ((this.productList[i].product_mrp - this.productList[i].discount_price) / this.productList[i].product_mrp) * 100
          this.productList[i].off = Math.round(roundOff)
          this.productList[i].url = JSON.parse(this.productList[i].thumbnail_url);
          // this.sanitizer.bypassSecurityTrustResourceUrl(this.rowData.url);


        }
      }else{
        console.log(res)
      }
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
       console.log('An error occurred:' + err.error.message, 'Error!');
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
       console.log('An error occurred:' + err.error.message, 'Error!');
        console.log('Response body:', err.error);
      }
       
    })
  }
  editProduct(data:any){
     
    // data.isFrom = this.isFrom;
    const dialogRef = this.dialog.open(AdminUploadPageComponent, {
      width: '90%',
      height: '90%',
      // hasBackdrop: false,
      autoFocus: false,
      disableClose: false,
      data: { data: data, isFrom: 'edit'}
    }
    );
    dialogRef.keydownEvents().subscribe(e => {
      if (e.keyCode === 27) {
        dialogRef.close();
      }
    });
  
  }
  deleteProduct(uniqueId:any){
    let obj={
      uniqueId: uniqueId
    }
    this.api.deleteProduct(obj).subscribe(res=>{
      if(res.status==200){

        this.getProductList();
      }else{
        console.log(res.reason)
      }
    },(err:HttpErrorResponse)=>{
      if(err.error  instanceof Error){
        // A client-side or network error occurred.
        console.log('An error occurred:' + err.error.message, 'Error!');
      }else{
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        console.log('An error occurred:' + err.error.message, 'Error!');
        console.log('Response body:', err.error);

      }
    })
  }
}
