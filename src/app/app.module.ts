import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// decorator => become angular module => more powerful , attributes in c#
// c# eg: [HttpPost] [Table("")] [DataAnnotation] []
@NgModule({
  // controller , to use component in the module, must be declared here to bundle them, 
  //or you can not use it 
  declarations: [
    AppComponent
  ],
  // use library/package/service
  imports: [
    BrowserModule,
    AppRoutingModule // routing 
  ],
  providers: [],
  // this component is running
  bootstrap: [AppComponent]
})
export class AppModule { }
