import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { PreviewComponent } from './components/preview/preview.component';
import { HeaderComponent } from './components/header/header.component';
import { NofoundComponent } from './components/nofound/nofound.component';

const appRoutes: Routes = [
  { path: 'preview', component: PreviewComponent },
  { path: '**', component: NofoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    HeaderComponent,
    NofoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
