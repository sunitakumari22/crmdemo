import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-big-lead',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './big-lead.component.html',
  styleUrl: './big-lead.component.css'
})
export class BigLeadComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Dashboard',
              routerLink:['Dashboard'],
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
              label: 'service Request',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'pendingRequest',
                      routerLink:['prequest'],
                      icon: 'pi pi-fw pi-align-left'
                  }
              ]
          },
          
          {
              label: 'Transection',
              icon: 'pi pi-fw pi-book',
              items: [
                  {
                      label: 'student',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'id',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'info',
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
          
      ];
  }


}
