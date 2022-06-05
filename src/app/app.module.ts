import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './Core/Interceptors/jwt-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// decorator => become angular module => more powerful , attributes in c#
// c# eg: [HttpPost] [Table("")] [DataAnnotation] []
@NgModule({
  // controller , to use component in the module, must be declared here to bundle them, 
  //or you can not use it 
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // use library/package/service
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule, // routing .
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi:true}
  ],
  // this component is running
  bootstrap: [AppComponent]
})
export class AppModule { }
