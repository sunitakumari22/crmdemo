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
import { PapperTypeComponent } from './students/papper-type/papper-type.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FaqheaderComponent } from './components/faqheader/faqheader.component';
import { FaqdashboardComponent } from './components/faqdashboard/faqdashboard.component';
import { SettingheaderComponent } from './components/settingheader/settingheader.component';
import { SettingComponent } from './components/setting/setting.component';
import { SprofileComponent } from './components/sprofile/sprofile.component';
import { FaqMsgComponent } from './components/faq-msg/faq-msg.component';
import { FeedbakFormComponent } from './components/feedbak-form/feedbak-form.component';

export const routes: Routes = [
    {
        'path':'login',
        component:LoginComponent
    },
    {
        'path':'logout',
        component:LogoutComponent,
        canActivate:[authGuard],
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
                        },
                        {
                            'path':'papper',
                            component:PapperTypeComponent
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
                    } ,
                    {
                        'path':'feedform',
                        component:FeedbakFormComponent
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
            {
                'path':'faqs',
                component:FaqheaderComponent,
                children:[
                    {
                        'path':'',
                        component:FaqdashboardComponent
                    },
                    {
                        'path':'dashboard',
                        component:FaqdashboardComponent
                    },
                    {
                        'path':'faqs',
                        component:FaqsComponent
                    },{
                        'path':'faqmsg',
                        component:FaqMsgComponent
                    }

                ]
                
            },
            {
                'path':'setting',
                component:SettingheaderComponent,
                children:[
                    {
                        'path':'',
                        component:SettingComponent
                    },
                    {
                        'path':'dashboard',
                        component:SettingComponent
                    },
                    {
                        'path':'profile',
                        component:SprofileComponent
                    }
                ]
                
            },
            
        ]
    },
    {
        'path':'',redirectTo:'login',pathMatch:'full'
    }
];
