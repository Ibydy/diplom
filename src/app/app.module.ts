import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2Webstorage} from 'ngx-webstorage';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PreviewComponent} from './components/preview/preview.component';
import {HeaderComponent} from './components/header/header.component';
import {NofoundComponent} from './components/nofound/nofound.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {TestComponent} from './components/test/test.component';
import {ResultListComponent} from './components/result-list/result-list.component';

const appRoutes: Routes = [
  {path: 'preview', component: PreviewComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'resultlist', component: ResultListComponent},
  {path: '**', component: NofoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    HeaderComponent,
    NofoundComponent,
    RegistrationComponent,
    LoginComponent,
    TestComponent,
    ResultListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    Ng2Webstorage,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
