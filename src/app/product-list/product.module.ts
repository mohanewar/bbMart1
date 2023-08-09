import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule, NgxPaginationModule
  ],
  exports: [ProductListComponent],

})
export class ProductModule { }
