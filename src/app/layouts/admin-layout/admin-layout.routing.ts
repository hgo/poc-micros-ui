import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { QueryComponent } from '../../query/query.component';
import { CcComponent } from 'app/cc/cc.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cc', component: CcComponent },
    { path: 'query', component: QueryComponent },
];
