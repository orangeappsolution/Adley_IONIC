import { Component } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';



@Component({
	selector: 'page-map',
	templateUrl: 'map.html',
})
export class MapPage {


	private isLoading = false;
	private isError = false;

	constructor(){
	}

	ionViewDidLoad() {
		
	}

}
