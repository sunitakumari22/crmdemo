import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-cloudbytes',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './cloudbytes.component.html',
  styleUrl: './cloudbytes.component.css'
})
export class CloudbytesComponent  implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Dashboard',
              icon: 'pi pi-fw pi-home',
              routerLink:'dashboard'
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
              label: 'Company',
              icon: 'pi pi-fw pi-inbox',
              items: [
                  {
                      label: 'Patners',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'patner',
                              icon: 'pi pi-fw pi-user'
                              
                          },
                          {
                              icon: 'pi pi-fw pi-image',
                              label: 'partener image'
                          }
                      ]
                  },
                  
                  
                  {
                      label: 'Organisation holidays',
                      icon: 'pi pi-fw pi-home'
                  }
              ]
          },
          {
              label: 'Master',
              icon: 'pi pi-fw pi-book',
              items: [
                  {
                      label: 'Academic',
                      icon: 'pi pi-fw pi-book',
                      items: [
                        {
                            label: 'Academic session',
                            icon: 'pi pi-fw pi-check-circle',
                            routerLink:'session'
                            
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                  },
                  {
                    label: 'Subject',
                    icon: 'pi pi-fw pi-user-minus',
                    items: [
                        {
                            label: 'papper',
                            icon: 'pi pi-fw pi-filter',
                            routerLink:'papper'
                           
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                 },
                  {
                      label: 'Account',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Service',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filter',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Print',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'List'
                          }
                      ]
                  },{
                    label: 'HR',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
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
              icon: 'pi pi-fw pi-book',
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
