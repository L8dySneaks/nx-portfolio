import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  public allowBtnClick = false;

  public pillWasCreated = 'No pill was created!';

  public pillName='';
  constructor() {
    setTimeout(() => {
      this.allowBtnClick = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  public onCreatePill() {
    this.pillWasCreated = "Pill was created!";
  }

  public onUpdatePillName(event: Event) {
    this.pillName = (<HTMLInputElement>event.target).value;
  }

}
