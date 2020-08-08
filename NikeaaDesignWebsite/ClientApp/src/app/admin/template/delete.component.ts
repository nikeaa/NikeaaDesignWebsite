import { AppComponent } from '../../app.component';
import { Component, OnInit } from '@angular/core';
import { AdminTemplate } from '../../services/admin/template/record';
import { AdminTemplateService } from '../../services/admin/template/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-template-delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class AdminTemplateDeleteComponent implements OnInit {

  constructor(
    private dataService: AdminTemplateService,
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
  record: AdminTemplate = null;

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
