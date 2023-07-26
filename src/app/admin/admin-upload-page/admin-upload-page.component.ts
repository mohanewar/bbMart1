import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServerapiService } from 'src/app/services/serverapi.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonServiceService } from 'src/app/common-service.service';
@Component({
  selector: 'app-admin-upload-page',
  templateUrl: './admin-upload-page.component.html',
  styleUrls: ['./admin-upload-page.component.css']
})
export class AdminUploadPageComponent implements OnInit {

  constructor(private api: ServerapiService, private sanitizer: DomSanitizer, private commonService:CommonServiceService,
    private dialogRef: MatDialogRef<AdminUploadPageComponent>, @Inject(MAT_DIALOG_DATA) private data: any,) { }
  productName:any;
  productDescription:any;
  productMrp:any;
  productDiscount:any;
  isDod:any;
  isPopup=false;
  rowData:any
  ngOnInit(): void {
    console.log("edit data:",this.data);
    if (this.data?.isFrom=='edit'){
      this.isPopup=true;
     this.rowData = this.data.data
      this.productName = this.rowData.product_name
        this.productDescription = this.rowData.product_description
      this.productMrp = this.rowData.product_mrp
        this.productDiscount = this.rowData.discount_price
      this.isDeal = this.rowData.is_deal
      this.isFreeDelivery = this.rowData.is_free_delivery
      this.isEmi = this.rowData.is_no_emi
      this.imageUrl = this.rowData.url;
   
    }
  }
  files:any;
  uploadImg(e:any){
    var fileName = e.target.files[0].name;
    var reader = new FileReader();
    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      // document.getElementById("preview").src = e.target?.result;
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  }
  selectedFiles:any
  file:any;
  sizeMB:any;
  upload(event: any) {
    // this.disabled = true;
    console.log(event.target.files)
    this.selectedFiles = event.target.files;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      console.log(this.selectedFiles)
      this.file = this.selectedFiles[i];
      let filesize = this.file.size / 1024 / 1024;
      this.sizeMB = (Math.round(filesize * 100) / 100)
      console.log("Size: " + filesize);
      if (filesize > 1) { //File size exceeds 2 MB
        // this.toastr.error('File is too big ' + this.sizeMB + '. Max filesize: 1 MiB.');
        return;
      }
   
    // this.selectedFiles = [];
  }
  let lthis=this
    var reader = new FileReader();
    reader.onload = function (e:any) {
      // get loaded data and render thumbnail.
      let preview 
      preview = document.getElementById("imgUrlSet") as HTMLImageElement;
      // preview?.src = e.target?.result;
      console.log(preview)
      preview.src=e.target?.result;
     lthis.imageUrl = e.target?.result;
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.selectedFiles[0]);
}
  isDeal:any;
  isFreeDelivery:any;
  isEmi:any;
  imageUrl:any;
  addProduct() {
    let dis = { description: this.productDescription };
    let model = {
      name: this.productName,
      description: this.productDescription,
mrp: this.productMrp,
discount: this.productDiscount,
isDeal: this.isDeal,
isFreeDelivery: this.isFreeDelivery,
isEmi: this.isEmi,
      imageUrl: JSON.stringify(this.imageUrl),
      rowStatus:1
    }
    this.api.uploadProducts(model).subscribe(res => {
      if(res.status==200){
        window.alert("Added successfully")
      }else{
        console.log(res.reason)
      }

    }, (err: HttpErrorResponse) => {
      console.log(err);
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        // this.toastr.error('An error occurred:' + err.error.message, 'Error!');
        console.log('An error occurred:' + err.error.message, 'Error!');
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        if (err.status === 999 || err.status === 403) {
          // window.location.reload();
        } else {
          // this.toastr.error('An error occurred:' + err.error.message, 'Error!');
          console.log('An error occurred:' + err.error.message, 'Error!');

        }
      }
    })
  }
  closePop(){
    this.dialogRef.close();
  }
  updateProduct(){
    let obj={
      product_name:this.productName,
product_description:this.productDescription,
product_mrp:this.productMrp,
discount_price:this.productDiscount,
is_deal:this.isDeal,
is_free_delivery:this.isFreeDelivery,
is_no_emi:this.isEmi, 
      thumbnail_url: JSON.stringify(this.imageUrl),
      unique_id:this.rowData.unique_id

    }
    this.api.updateProducts(obj).subscribe(res=>{
      if (res.status == 200) {
        this.closePop();
        window.alert("Updated successfully");
        this.commonService.notifyRefresh({ value: 'adminUploadPage' });
      } else {
        console.log(res.reason)
      }

    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log('An error occured :'+err.error.message,'error!')
      }else{
        console.log('An error occurred:' + err.error.message, 'Error!');

      }
    })
  }
}
