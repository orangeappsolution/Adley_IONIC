import { Component, ViewChild } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';
import { AgmMap } from '@agm/core';



@Component({
	selector: 'page-map',
	templateUrl: 'map.html',
})
export class MapPage {


	@ViewChild("map") map : AgmMap;


	private isLoading = false;
	private isError = false;
	private locations : Array<any> = [];

	constructor(
		private locationProvider : LocationProvider
	){
		this.locationProvider.$locationStore.subscribe((data)=>{
			this.locations = data;
		});
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
