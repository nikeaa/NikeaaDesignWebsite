import { AppComponent } from '../app.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../services/home/service';
import { AdminHomePageSection } from '../services/admin/home-page-section/record';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: AdminHomePageSection[];

  constructor(dataService: HomeService) {
    dataService.getActiveItems().subscribe(items => {
      this.items = items;    
    });
  }

  ngOnInit() {
    AppComponent.component.loadingIndicatorOff();
  }
}
