
import { Component, Injectable } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
               //api






@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardModule, RouterLink, HttpClientModule, HeaderComponent,AccordionModule,ToastModule ],
    providers: [MessageService,Injectable],
})
export class AppComponent {
  title = 'login';
}
