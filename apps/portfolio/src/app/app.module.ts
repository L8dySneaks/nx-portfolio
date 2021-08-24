import { SharedNgUiModule } from '@shared/ng-ui';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedNgUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
