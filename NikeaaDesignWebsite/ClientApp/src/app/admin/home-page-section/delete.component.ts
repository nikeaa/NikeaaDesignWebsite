import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AdminHomePageSection } from '../../services/admin/home-page-section/record';
import { AdminHomePageSectionService } from '../../services/admin/home-page-section/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home-page-section-delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class AdminHomePageSectionDeleteComponent implements OnInit {

  constructor(
    private dataService: AdminHomePageSectionService,
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
  record: AdminHomePageSection = null;

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
