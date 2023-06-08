import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { InputInformationComponent } from './input-information/input-information.component';
import { Curriculum } from './model/curriculum.model';
import { ImageCropperModule } from 'ngx-image-cropper';


import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalImagePerfilContentComponent } from './modal-image-perfil-content/modal-image-perfil-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    VistaPreviaComponent,
    InputInformationComponent,
    ModalImagePerfilContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
