import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CInicioComponent } from './pages/c-inicio/c-inicio.component';
import { CFooterComponent } from './pages/c-footer/c-footer.component';
import { CTermComponent } from './pages/c-term/c-term.component';
import { CHeaderComponent } from './pages/c-header/c-header.component';
import { CQuotationComponent } from './pages/c-inicio/c-quotation/c-quotation.component';

@NgModule({
  declarations: [
    AppComponent,
    CInicioComponent,
    CFooterComponent,
    CTermComponent,
    CHeaderComponent,
    CQuotationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
