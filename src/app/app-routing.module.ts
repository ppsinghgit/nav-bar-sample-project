/* eslint-disable max-len */
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

/* eslint-enable max-len */

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
