import { NgModule } from '@angular/core';


import { HelloWorldComponent } from './helloworld.component';


export { HelloWorldComponent } from './helloworld.component';
@NgModule({
	declarations: [
		HelloWorldComponent
	],
	exports: [
		HelloWorldComponent
	]
})
export class MadhuCommonComponentModule {
    
}