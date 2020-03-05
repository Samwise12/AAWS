import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';



@Injectable({
  providedIn: 'root'
})

export class AppServiceService {
	_url: string = 'http://localhost:8080/api/v'

  constructor(private http: HttpClient) { }

  enroll(s: String) {
  	console.log("HITT!!", s);
  	this.http.post(this._url, s)
  	.subscribe(
  		res => console.log("DONE"),
  		err => console.log("ERROR")
  		);
  }

}
