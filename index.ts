import { NgModule } from '@angular/core';

import { MadhuCommonComponentModule } from './componets';

@NgModule({
	exports: [
		MadhuCommonComponentModule
	]
})
export class MadhuCommonModule{}

export * from './componets';