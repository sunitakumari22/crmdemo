import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CloudbytesComponent } from './components/cloudbytes/cloudbytes.component';
import { CloudashboardComponent } from './components/cloudashboard/cloudashboard.component';
import { ExecutiveEdgeComponent } from './components/executive-edge/executive-edge.component';
import { ExecutiveDashboardComponent } from './components/executive-dashboard/executive-dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BigLeadComponent } from './components/big-lead/big-lead.component';
import { BigLeadDashboardComponent } from './components/big-lead-dashboard/big-lead-dashboard.component';
import { SpendingReqComponent } from './components/spending-req/spending-req.component';
import { AcademicSeasonComponent } from './components/academic-season/academic-season.component';
import { LogoutComponent } from './components/logout/logout.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
    {
        'path':'login',
        component:LoginComponent
    },
    {
        'path':'logout',
        component:LogoutComponent
    },
    
    {
        'path':'register',
        component:RegisterComponent
    },
    {
        'path':'home',
        component:HeaderComponent,
        canActivate:[authGuard],
        children:[
            {
                'path':'',
                component:HomeComponent
            },
            {
                'path':'cloudbytes',
                component:CloudbytesComponent,
                children:[
                   
                        {
                            'path':'',
                            component:CloudashboardComponent
                        } ,
                        {
                            'path':'dashboard',
                            component:CloudashboardComponent
                        } ,
                        {
                            'path':'session',
                            component:AcademicSeasonComponent
                        }   
                   
                ]
            },
            {
                'path':'executive_edge',
                component:ExecutiveEdgeComponent,
                children:[
                   
                    {
                        'path':'',
                        component:ExecutiveDashboardComponent
                    } ,
                    {
                        'path':'dashboard',
                        component:ExecutiveDashboardComponent
                    } ,
                    {
                        'path':'feedback',
                        component:FeedbackComponent
                    }   
               
            ]
            },
            {
                'path':'bigLead',
                component:BigLeadComponent,
                children:[
                   
                    {
                        'path':'',
                        component:BigLeadDashboardComponent
                    },
                    {
                        'path':'Dashboard',
                        component:BigLeadDashboardComponent
                    },
                    {
                        'path':'prequest',
                        component:SpendingReqComponent
                    }    
               
            ]
            },
            
        ]
    },
    {
        'path':'',redirectTo:'login',pathMatch:'full'
    }
];
