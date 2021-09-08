import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-project-pill',
  templateUrl: './project-pill.component.html',
  styleUrls: ['./project-pill.component.scss']
})
export class ProjectPillComponent implements OnInit {
  public pillName = 'Angular';
  public projectNum = '001';

  constructor() { }

  ngOnInit(): void {
  }

}
