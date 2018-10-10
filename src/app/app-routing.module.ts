import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemModule } from './system/system.module';
import { AuthModule } from './auth/auth.module';




@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    SystemModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {  }
