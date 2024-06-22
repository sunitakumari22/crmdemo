import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-settingheader',
  standalone: true,
  imports: [MegaMenuModule,RouterLink,RouterOutlet,MenubarModule],
  templateUrl: './settingheader.component.html',
  styleUrl: './settingheader.component.css'
})
export class SettingheaderComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            routerLink:['dashboard'],
            icon: 'pi pi-fw pi-home',
            
        },
        
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-question-circle',
            items: [
                {
                    label: 'view',
                    routerLink:['profile'],
                    icon: 'pi pi-fw pi-question'
                },
                
                
            ]
        },
        {
            label: 'Transection',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Report',
            icon: 'pi pi-fw pi-inbox',
            items: [
                {
                    label: 'Save',
                    icon: 'pi pi-fw pi-calendar-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-calendar-minus'
                }
            ]
        }
    ];
}

}
