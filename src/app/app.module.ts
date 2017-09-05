import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {InstagramLoginComponent} from './instagram-login/instagram-login.component';
import {AuthCodeHandlerComponent} from './auth-code-handler/auth-code-handler.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth_code', component: AuthCodeHandlerComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstagramLoginComponent,
    AuthCodeHandlerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
