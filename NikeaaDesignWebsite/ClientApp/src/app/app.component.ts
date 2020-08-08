import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  static component;
  showLoadingIndicator: Boolean = true;
  navBarDisplayed: Boolean = true;

  constructor(
    private routerService: Router,
    private changeDetectorService: ChangeDetectorRef
  ) {
    this.routerService.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      //if (routerEvent instanceof NavigationEnd) {
      //  this.showLoadingIndicator = false;
      //}
    });
  }

  ngOnInit() {
    AppComponent.component = this;
  }

  ngAfterViewChecked() {
    this.navBarDisplayed = this.routerService.url != '/';
    this.changeDetectorService.detectChanges();
  }

  loadingIndicatorOff() {
    this.showLoadingIndicator = false;
    this.changeDetectorService.detectChanges();
  }

  loadingIndicatorOn() {
    this.showLoadingIndicator = true;
    this.changeDetectorService.detectChanges();
  }
}
