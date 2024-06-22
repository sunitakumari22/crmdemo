import { Component } from '@angular/core';
import {MegaMenuModule} from 'primeng/megamenu';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-faqheader',
  standalone: true,
  imports: [MegaMenuModule,RouterLink,RouterOutlet,MenubarModule],
  templateUrl: './faqheader.component.html',
  styleUrl: './faqheader.component.css'
})
export class FaqheaderComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            routerLink:['dashboard'],
            icon: 'pi pi-fw pi-home',
            
        },
        
        {
            label: 'FAQS',
            icon: 'pi pi-fw pi-question-circle',
            items: [
                {
                    label: 'Question',
                    routerLink:['faqs'],
                    icon: 'pi pi-fw pi-question'
                },
                
                
            ]
        },
        {
            label: 'Ask Question',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Ask',
                    icon: 'pi pi-fw pi-pencil',
                    routerLink:['faqmsg']
                    
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
