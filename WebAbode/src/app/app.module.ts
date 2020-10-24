import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { DonationsComponent } from './donations/donations.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    IntroComponent,
    ContentComponent,
    ThankyouComponent,
    PreviousWorkComponent,
    DonationsComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    MainPageComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
