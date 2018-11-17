import { Component } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';

@Component({
	selector: 'page-locations',
	templateUrl: 'locations.html',
})
export class LocationsPage {

	private isLoading = false;
	private isError = false;
	private locations = [];

	constructor(
		private locationProvider : LocationProvider
	){
		this.locationProvider.$locationStore.subscribe((data)=>{
			this.locations = data;
		});
	}

	ionViewDidEnter(){
		this.getLocations();
	}

	getLocations(){

		this.isLoading = true;
		this.isError = false;

		this.locationProvider.reload().subscribe(()=>{
			this.isLoading = false;
			this.isError = false;
		},()=>{
			this.isLoading =false;
			this.isError = true;
		});

	}

}
