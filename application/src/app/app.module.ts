import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


// Pages

import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { LocationsPage } from '../pages/locations/locations';


const pages = [
	TabsPage,
	MapPage,
	LocationsPage
];

// providers


import { LocationProvider } from '../providers/location/location';
import { ApiProvider } from '../providers/api/api';


@NgModule({
	declarations: [
		MyApp,
		...pages
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AgmCoreModule.forRoot({
			apiKey : ''
		}),
		IonicModule.forRoot(MyApp, {
			mode: 'md'
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		...pages
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    	LocationProvider,
    	ApiProvider
	]
})
export class AppModule { }
