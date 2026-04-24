import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { GamesComponent } from './components/games/games';
import { BenefitsComponent } from './components/benefits/benefits';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    HeroComponent,
    GamesComponent,
    BenefitsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
