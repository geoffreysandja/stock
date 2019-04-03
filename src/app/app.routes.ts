import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes=[
    {
        path:'',
        component: DashboardComponent
    },
    {
        path:'manage',
        component: ManageComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);