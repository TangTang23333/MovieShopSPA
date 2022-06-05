import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  NavbarComponent
} from './Layout/navbar/navbar.component';
import {
  FooterComponent
} from './Layout/footer/footer.component';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatCardModule
} from '@angular/material/card';
import {
  FormsModule,
  NgForm,
  NgModelGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})

export class CoreModule {}
