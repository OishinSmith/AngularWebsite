import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HobbiesComponent } from './hobbies/hobbies.component';


const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: MainPageComponent},
  { path: "About", component: MainPageComponent},
  { path: "Gallery", component: GalleryComponent},
  { path: "Timeline", component: MainPageComponent},
  { path: "The team", component: ThankyouComponent},
  { path: "Portfolio", component: MainPageComponent},
  { path: "Hobbies", component: HobbiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
