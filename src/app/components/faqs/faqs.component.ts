import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SeasonsService } from '../../services/seasons.service';
import { faqs } from '../../interfaces/auth';
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent  implements OnInit{
  faqList: faqs[]=[] ;

  constructor(private seasonservice:SeasonsService) { }

  ngOnInit(): void {
    this.fetchFaqs();
  }

  fetchFaqs(): void {
    this.seasonservice.getFaqs().subscribe(
      result => {
        console.warn(result);
        this.faqList=result
      },
      (error) => {
        console.error('Error fetching FAQs:', error);
      }
    );
  }
}


