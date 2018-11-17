import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LocationProvider {

	private locations : Array<any> = [];
	public $locationStore : BehaviorSubject<Array<any>> = new BehaviorSubject(this.locations);

	constructor(public http: ApiProvider) {

	}

	public reload(){

		let apiObservable = this.http.get("locations").shareReplay();
		apiObservable.subscribe((data : Array<any>)=>{

			if(!Array.isArray(this.locations))
				return;

			this.locations = data;
			this.$locationStore.next(this.locations);
			
		},()=>{});
		
		return apiObservable;

		
	}





}
