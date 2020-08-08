import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AdminHomePageSection } from '../../services/admin/home-page-section/record';
import { AdminHomePageSectionService } from '../../services/admin/home-page-section/service';
import { Paging } from '../../paging';

@Component({
  selector: 'app-admin-home-page-section-component',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AdminHomePageSectionIndexComponent extends Paging implements OnInit {
  allDataItems: AdminHomePageSection[] = [];
  dataItems: AdminHomePageSection[] = [];
  isDeleting = false;

  constructor(
    private dataService: AdminHomePageSectionService
  ) {
    super();
    this.pageSize = 2;
    this.refreshItems = this.refreshDataItems;
  }

  ngOnInit() {
    this.dataService.getAll().subscribe(i => {
      this.allDataItems = i.sort((a,b) => a.sortOrder - b.sortOrder);
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
