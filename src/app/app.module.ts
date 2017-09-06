import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {AuthCodeHandlerComponent} from './pages/auth-code-handler/auth-code-handler.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {SearchComponent} from './pages/search/search.component';

import {InstagramLoginComponent} from './components/instagram-login/instagram-login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth_code', component: AuthCodeHandlerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthCodeHandlerComponent,
    ProfileComponent,
    SearchComponent,
    InstagramLoginComponent
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
