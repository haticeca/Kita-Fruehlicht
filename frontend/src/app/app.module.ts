import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './members/read/read.component';
import {
  circle, download, emojiLaughing,
  emojiSmile,
  emojiWink, fileEarmarkCheck,
  NgxBootstrapIconsModule,
  person,
  personCircle,
  search
} from 'ngx-bootstrap-icons';
import { pencilSquare } from 'ngx-bootstrap-icons';
import { trash } from 'ngx-bootstrap-icons';
import { FormComponent } from './members/read/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { KonzepteComponent } from './konzepte/konzepte.component';
import { ProjekteComponent } from './projekte/projekte.component';

const icons = {
  pencilSquare,
  trash,
  personCircle,
  search,
  emojiWink,
  emojiSmile,
  emojiLaughing,
  download,
  fileEarmarkCheck
};

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    CreateMemberComponent,
    RegisterMemberComponent,
    ImpressumComponent,
    KontaktComponent,
    HomeComponent,
    KonzepteComponent,
    ProjekteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxBootstrapIconsModule.pick(icons),
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
