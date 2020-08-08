import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements AfterViewChecked {
  isExpanded = false;
  displayNavBar = true;

  constructor(
    private routerService: Router,
    private changeDetectorService: ChangeDetectorRef
  ) {

  }

  ngAfterViewChecked() {
    this.displayNavBar = this.routerService.url != '/';
    this.changeDetectorService.detectChanges();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
