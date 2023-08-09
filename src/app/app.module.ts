import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModule } from './product-list/product.module';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AdminUploadPageComponent } from './admin/admin-upload-page/admin-upload-page.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
const appRoute : Routes=[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminMain', component: AdminMainComponent },
  { path: 'adminProductList', component: AdminProductListComponent },
  { path: 'adminUpload', component: AdminUploadPageComponent },




  // {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminUploadPageComponent,
    AdminMainComponent,
    AdminProductListComponent,
    // ProductListComponent
  ],
  imports: [
    BrowserModule, NgxPaginationModule, AngularFireAuthModule,
    AppRoutingModule, FormsModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoute), ProductModule, AngularFireModule.initializeApp(environment.firebase)
    // AngularFontAwesomeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MatDialogRef,
      useValue: []
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: []
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
