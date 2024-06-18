import { Component, Injectable } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MegaMenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {ImageModule} from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from '../login/login.component';
import {SidebarModule} from 'primeng/sidebar';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,MegaMenuModule,PanelMenuModule,ButtonModule,RippleModule ,ImageModule,ToastModule,LoginComponent,SidebarModule],
  providers: [MessageService,Injectable],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
visibleSidebar1= true ;

constructor(private primengConfig: PrimeNGConfig ,private messageservice:MessageService){}

  ngOnInit() {
    this.primengConfig.ripple = true;
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-pw pi-home',
              routerLink:'/home'
              
          },
          {
              label: 'CloudBytes',
              icon: 'pi pi-fw pi-cloud',
              routerLink:'/home/cloudbytes'
              
          },
          {
              label: 'Executive_edge',
              icon: 'pi pi-fw pi-user',
              routerLink:'/home/executive_edge'
              
          },
          {
              label: 'BigLead',
              icon: 'pi pi-fw pi-briefcase',
              routerLink:'/home/bigLead'
              
          },
          {
            label: 'Product',
            icon: 'pi pi-fw pi-dollar',
            routerLink:'/home/bigLead'
            
        },
        {
          label: 'Mindspark',
          icon: 'pi pi-fw pi-book',
          routerLink:'/home/bigLead'
          
      },
      {
        label: 'KnowledgeStand',
        icon: 'pi pi-fw pi-money-bill',
        routerLink:'/home/bigLead'
        
    },
    {
      label: 'FAQS',
      icon: 'pi pi-fw pi-question-circle',
      routerLink:'/home/bigLead'
      
  },
  {
    label: 'Setting',
    icon: 'pi pi-fw pi-cog',
    routerLink:'/home/bigLead'
    
},
{
  label: 'LogOut',
  icon: 'pi pi-fw pi-power-off',
  routerLink:'/logout'
  
}
      ];
  }

}
