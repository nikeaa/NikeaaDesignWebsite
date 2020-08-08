import { AppComponent } from '../app.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'apptemp--home',
  templateUrl: './temp-home.component.html',
  styleUrls: ['./temp-home.component.css']
})
export class TempHomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    AppComponent.component.loadingIndicatorOff();
  }
}
