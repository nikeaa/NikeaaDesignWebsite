
﻿



﻿

import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { MyNewScreen } from '../../services/admin/template/record';
import { MyNewScreenService } from '../../services/admin/template/service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-new-screen-delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class MyNewScreenDeleteComponent implements OnInit {

  constructor(
    private dataService: MyNewScreenService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(segment => {
      this.id = parseInt(segment[1].path);
      this.dataService.getOne(this.id).subscribe(r => {
        this.record = r;
      });
    });
  }

  id: number = -1;
  record: MyNewScreen = null;

  ngOnInit() {
    AppComponent.component.loadingIndicatorOff();
  }

  onCancelClick() {
    this.dataService.navigateToIndex();
  }

  onSubmit() {
    AppComponent.component.loadingIndicatorOn();
    this.dataService.delete(this.id).subscribe(i => {
      this.dataService.navigateToIndex();
    });
  }
}
