import { Routes } from '@angular/router';
import { QueryComponent } from '../../query/query.component';
import { CcComponent } from 'app/cc/cc.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'cc' },
    { path: 'cc', component: CcComponent },
    { path: 'query', component: QueryComponent },
];
