import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { AngularPillComponent } from './angular-pill/angular-pill.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryButtonComponent,
    AngularPillComponent
  ],
  exports: [
    PrimaryButtonComponent,
    AngularPillComponent
  ],
})
export class SharedNgUiModule {}
