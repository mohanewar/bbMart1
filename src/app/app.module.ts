import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
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
import { numberValidation } from './directives/numberValidation.directive';
import { ForgetPassComponent } from './forget-pass/forget-pass.component'
import { AuthGuardGuard } from './core/guards/auth-guard.guard';
const appRoute: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'adminMain', component: AdminMainComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'adminProductList', component: AdminProductListComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'adminUpload', component: AdminUploadPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'forgetpass', component: ForgetPassComponent,
    // canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }





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
    numberValidation,
    ForgetPassComponent
    // ProductListComponent
  ],
  imports: [
    BrowserModule, NgxPaginationModule, AngularFireAuthModule,
    AppRoutingModule, FormsModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoute), ProductModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB7R-1fgBrEfhE6z7r8xv1xaHdkFth-rCc",
      authDomain: "bbmart-bdd8f.firebaseapp.com",
      projectId: "bbmart-bdd8f",
      storageBucket: "bbmart-bdd8f.appspot.com",
      messagingSenderId: "541226734907",
      appId: "1:541226734907:web:4787f45e6a1b9757a0931e",
      measurementId: "G-K7M372DRDR"
    })
    // AngularFontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
