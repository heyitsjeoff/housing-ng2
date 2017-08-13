import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import {HouseComponent} from "./house/house.component";

export const ROUTES: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'house/:id', component: HouseComponent},
  { path: '**',       component: NoContentComponent },
];
