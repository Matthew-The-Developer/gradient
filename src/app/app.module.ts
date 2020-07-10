import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveModule } from 'ngx-responsive';

import { GradientDirective } from './directives/gradient.directive';
import { GradienttextDirective } from './directives/gradienttext.directive';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GradienttextDirective,
    GradientDirective,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ResponsiveModule.forRoot(),

    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
