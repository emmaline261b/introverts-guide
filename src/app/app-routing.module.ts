import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import {CookComponent} from './cook/cook.component';
import {DressComponent} from './dress/dress.component';
import {TravelComponent} from './travel/travel.component';
import {VoteComponent} from './vote/vote.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'home', component: IntroComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'cook', component: CookComponent },
  { path: 'dress', component: DressComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'vote', component: VoteComponent },
  { path: '**', redirectTo: 'intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
