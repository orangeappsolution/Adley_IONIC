import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



// Pages

import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { LocationsPage } from '../pages/locations/locations';

const pages = [
	TabsPage,
	MapPage,
	LocationsPage
];


@NgModule({
	declarations: [
		MyApp,
		...pages
	],
	imports: [
		BrowserModule,
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
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
