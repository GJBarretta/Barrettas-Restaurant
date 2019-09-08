import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { CateringComponent } from './catering/catering.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialsComponent } from './specials/specials.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { EditComponent } from './edit/edit.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PizzaSpecialsComponent } from './specials/pizza-specials/pizza-specials.component';
import { LunchSpecialsComponent } from './specials/lunch-specials/lunch-specials.component';
import { DinnerSpecialsComponent } from './specials/dinner-specials/dinner-specials.component';
import { AppetizersComponent } from './menu/menu-categories/appetizers/appetizers.component';
import { SideOrdersComponent } from './menu/menu-categories/side-orders/side-orders.component';
import { SoupComponent } from './menu/menu-categories/soup/soup.component';
import { SaladComponent } from './menu/menu-categories/salad/salad.component';
import { EntreesComponent } from './menu/menu-categories/entrees/entrees.component';
import { PastaDinnerComponent } from './menu/menu-categories/pasta-dinner/pasta-dinner.component';
import { BakedPastaComponent } from './menu/menu-categories/baked-pasta/baked-pasta.component';
import { HotWrapsComponent } from './menu/menu-categories/hot-wraps/hot-wraps.component';
import { GlutenFreeShortComponent } from './menu/menu-categories/gluten-free-short/gluten-free-short.component';
import { HotSubsComponent } from './menu/menu-categories/hot-subs/hot-subs.component';
import { ColdSubsComponent } from './menu/menu-categories/cold-subs/cold-subs.component';
import { BurgersComponent } from './menu/menu-categories/burgers/burgers.component';
import { DomenicoBestComponent } from './menu/menu-categories/domenico-best/domenico-best.component';
import { SandwichesComponent } from './menu/menu-categories/sandwiches/sandwiches.component';
import { PizzaComponent } from './menu/menu-categories/pizza/pizza.component';
import { StromboliComponent } from './menu/menu-categories/stromboli/stromboli.component';
import { CalzoneComponent } from './menu/menu-categories/calzone/calzone.component';
import { BeveragesComponent } from './menu/menu-categories/beverages/beverages.component';
import { DessertComponent } from './menu/menu-categories/dessert/dessert.component';
import { ChildrenComponent } from './menu/menu-categories/children/children.component';
import { ALaCarteComponent } from './menu/menu-categories/a-la-carte/a-la-carte.component';
import { MenuFacebookComponent } from './menu-facebook/menu-facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    ContactComponent,
    CateringComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SpecialsComponent,
    HomeComponent,
    MenuComponent,
    LocationComponent,
    EditComponent,
    SlideshowComponent,
    PizzaSpecialsComponent,
    LunchSpecialsComponent,
    DinnerSpecialsComponent,
    AppetizersComponent,
    SideOrdersComponent,
    SoupComponent,
    SaladComponent,
    EntreesComponent,
    PastaDinnerComponent,
    BakedPastaComponent,
    HotWrapsComponent,
    GlutenFreeShortComponent,
    HotSubsComponent,
    ColdSubsComponent,
    BurgersComponent,
    DomenicoBestComponent,
    SandwichesComponent,
    PizzaComponent,
    StromboliComponent,
    CalzoneComponent,
    BeveragesComponent,
    DessertComponent,
    ChildrenComponent,
    ALaCarteComponent,
    MenuFacebookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
