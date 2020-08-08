﻿﻿import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { MyNewScreen } from '../../services/admin/template/record';
import { MyNewScreenService } from '../../services/admin/template/service';
import { Paging } from '../../paging';

@Component({
  selector: 'app-my-new-screen-component',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MyNewScreenIndexComponent extends Paging implements OnInit {
  allDataItems: MyNewScreen[] = [];
  dataItems: MyNewScreen[] = [];
  isDeleting = false;

  constructor(
    private dataService: MyNewScreenService
  ) {
    super();
    this.pageSize = 2;
    this.refreshItems = this.refreshDataItems;
  }

  ngOnInit() {
    this.dataService.getAll().subscribe(i => {
      this.allDataItems = i;
      this.itemCount = i.length;
      this.calculateFirstAndLastItem();
      this.pageCount = this.calculatePageCount(this.itemCount, this.pageSize);
      this.refreshItems();
      AppComponent.component.loadingIndicatorOff();
    });
  }

  onAddNewClick() {
    this.dataService.navigateToCreate();
  }

  onEditClick(index: number) {
    this.dataService.navigateToEdit(this.dataItems[index].id);
  }

  onDeleteClick(index: number) {
    this.dataService.navigateToDelete(this.dataItems[index].id);
  }

  refreshDataItems() {
    this.calculateFirstAndLastItem();
    this.dataItems = this.allDataItems.slice(this.firstItemNumber - 1, this.lastItemNumber);
  }
}
