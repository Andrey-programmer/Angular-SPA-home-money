import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {  }
