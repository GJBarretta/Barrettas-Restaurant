import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CateringComponent } from './catering/catering.component';
import { AboutComponent } from './about/about.component';
import { SpecialsComponent } from './specials/specials.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFacebookComponent } from './menu-facebook/menu-facebook.component';
import { LocationComponent } from './location/location.component';
import { JobsComponent } from './jobs/jobs.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'location', component: LocationComponent },
    { path: 'menu', component: MenuComponent }, 
    { path: 'menu-facebook', component: MenuFacebookComponent },
    { path: 'specials', component: SpecialsComponent },
    { path: 'catering', component: CateringComponent },
    { path: 'about', component: AboutComponent },
    { path: 'jobs',  component: JobsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'edit',  component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
