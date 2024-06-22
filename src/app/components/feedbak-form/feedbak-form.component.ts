import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedbak-form',
  standalone: true,
  imports: [StarRatingComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './feedbak-form.component.html',
  styleUrl: './feedbak-form.component.css'
})
export class FeedbakFormComponent {
submitDeatils() {
throw new Error('Method not implemented.');
}

// submitDeatils() {
// throw new Error('Method not implemented.');
// }
faqform=this.fb.group({
    
  // email:['',[Validators.required,Validators.email]],
  // message:['',[Validators.required]],
  name: '',
  email: '',
  satisfaction: 0,
  serviceQuality: 0,
  easeOfUse: 0,
  comments: ''

});

constructor(private fb:FormBuilder) {}

submitFeedback() {
  // console.log('Submitting feedback:', this.formData);
  // Implement API call or other handling logic here
  // For demonstration, simply log the data
}


}


