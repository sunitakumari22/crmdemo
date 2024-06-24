import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-feedbak-form',
  standalone: true,
  imports: [StarRatingComponent,FormsModule,ReactiveFormsModule,CommonModule,HttpClientJsonpModule],
  templateUrl: './feedbak-form.component.html',
  styleUrl: './feedbak-form.component.css'
})
export class FeedbakFormComponent implements OnInit {
email: string;
  feedbackList!: any[];

 constructor(private fb:FormBuilder , private studentservice:StudentService, private router:Router,private httpclient:HttpClient) {
  this.email = sessionStorage.getItem('email')|| 'Guest';
  
 }
 ngOnInit() {
  this.fetchFeedback();
}

questions = [
  'How satisfied are you with our service?',
  'How likely are you to recommend us to a friend?',
  'How satisfied are you with the product quality?'
];
ratings: { [key: string]: number } = {};



submitFeedback() {
  const feedbackData = {
    feedback: this.questions.map((question, index) => ({
      question,
      rating: this.ratings[question]
    }))
  };
  this.httpclient.post('http://localhost:3000/feedback', feedbackData)
    .subscribe(
      () => {
        alert('Feedback submitted successfully!');
        this.resetForm();
      },
      error => {
        console.error('Error submitting feedback:', error);
        alert('Error submitting feedback. Please try again.');
      }
    );
}

resetForm() {
  this.ratings = {};
}
fetchFeedback() {
  this.studentservice.getFeedback()
    .subscribe(
      (data) => {
        this.feedbackList = data;
      },
      (error) => {
        console.error('Error fetching feedback:', error);
        // Handle error
      }
    );
}

}


