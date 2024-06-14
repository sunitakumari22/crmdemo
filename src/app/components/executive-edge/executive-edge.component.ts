import { Component, OnInit } from '@angular/core';
import {MegaMenuModule} from 'primeng/megamenu';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-executive-edge',
  standalone: true,
  imports: [MegaMenuModule, RouterLink, RouterOutlet, MenubarModule,],
  templateUrl: './executive-edge.component.html',
  styleUrl: './executive-edge.component.css'
})
export class ExecutiveEdgeComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            routerLink:['dashboard'],
            icon: 'pi pi-fw pi-home',
            // items: [
            //     {
            //         label: 'New',
            //         icon: 'pi pi-fw pi-plus',
            //         items: [
            //             {
            //                 label: 'Bookmark',
            //                 icon: 'pi pi-fw pi-bookmark'
            //             },
            //             {
            //                 label: 'Video',
            //                 icon: 'pi pi-fw pi-video'
            //             }
            //         ]
            //     },
            //     {
            //         label: 'Delete',
            //         icon: 'pi pi-fw pi-trash'
            //     },
            //     {
            //         separator: true
            //     },
            //     {
            //         label: 'Export',
            //         icon: 'pi pi-fw pi-external-link'
            //     }
            // ]
        },
        
        {
            label: 'Master',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Feedback',
                    routerLink:['feedback'],
                    icon: 'pi pi-fw pi-user-plus'
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
