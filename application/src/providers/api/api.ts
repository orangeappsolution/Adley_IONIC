import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

	private baseUrl = 'http://localhost:3000/';

	constructor(public http: HttpClient) {
		
	}

	public get(endPoint){
		let url = this.baseUrl+endPoint;
		return this.http.get(url);
	}


}
