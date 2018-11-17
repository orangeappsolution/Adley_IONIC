import { Component } from '@angular/core';
import { MapPage } from "../map/map";
import { LocationsPage } from '../locations/locations';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {


	private tab1Root = MapPage;
	private tab2Root = LocationsPage;


	constructor() {}



}
