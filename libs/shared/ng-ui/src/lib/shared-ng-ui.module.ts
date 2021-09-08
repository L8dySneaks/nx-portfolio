import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { AngularPillComponent } from './angular-pill/angular-pill.component';
import { HtmlPillComponent } from './html-pill/html-pill.component';
import { ProjectPillComponent } from './project-pill/project-pill.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryButtonComponent,
    AngularPillComponent,
    HtmlPillComponent,
    ProjectPillComponent
  ],
  exports: [
    PrimaryButtonComponent,
    AngularPillComponent,
    HtmlPillComponent,
    ProjectPillComponent
  ],
})
export class SharedNgUiModule {}
