import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FichasDashboardComponent } from './fichas-dashboard/fichas-dashboard.component';
import { FichasEditarComponent } from './fichas-editar/fichas-editar.component';


export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: FichasDashboardComponent },
            { path: 'editar', component: FichasEditarComponent }
        ]
    }
];