import { Routes } from '@angular/router';
import { HomeComponentComponent } from './feature/public/home-component/home-component.component';
import { AboutComponentComponent } from './feature/public/about-component/about-component.component';
import { PublicRoutesComponent } from './layout/public/public-routes/public-routes.component';
import { PrivateRoutesComponent } from './layout/private/private-routes/private-routes.component';
import { DashboardComponentComponent } from './feature/private/dashboard-component/dashboard-component.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicRoutesComponent,
    children: [
      {
        path: '',
        component: HomeComponentComponent,
      },
      {
        path: 'posts',
        component: AboutComponentComponent,
      },
    ],
  },
  {
    path: '',
    component: PrivateRoutesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponentComponent,
      },
    ],
  },
];
