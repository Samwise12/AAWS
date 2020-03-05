import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppServiceService } from './api/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';
  angForm: FormGroup;
  age = new FormControl('');
  constructor (private fb: FormBuilder, private AppServiceService: AppServiceService) {
  	this.createForm();  	
  }

  createForm() {
  	this.angForm = this.fb.group({
  		person_name: ['']
  	})
  }

    ngOnInit() {
    	console.log("Hello");
    	this.createForm();
 	}

 	public onSubmit(data: any, event: Event) {
 		event.preventDefault();

 		console.log("sadf");
 		// console.log(this.angForm.value);
 		// console.log(data)

 		this.AppServiceService.enroll(data)

 	}

}
