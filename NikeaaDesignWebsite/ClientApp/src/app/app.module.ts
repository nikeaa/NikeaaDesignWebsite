import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TempHomeComponent } from './temp-home/temp-home.component';
import { HomeComponent } from './home/home.component';
import { WrappersComponent } from './wrappers/wrappers.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { CustomPortfolioComponent } from './custom-portfolio/custom-portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoryComponent } from './category/category.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TempHomeComponent,
    HomeComponent,
    WrappersComponent,
    OtherProductsComponent,
    CustomPortfolioComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoryComponent,
    InvalidRouteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path: '', component: TempHomeComponent, pathMatch: 'full' },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'wrappers', component: WrappersComponent },
      { path: 'wrappers/:category', component: CategoryComponent, pathMatch: 'full' },
      { path: 'other-products', component: OtherProductsComponent, pathMatch: 'full' },
      { path: 'custom-portfolio', component: CustomPortfolioComponent, pathMatch: 'full' },
      { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
      { path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
      { path: 'purchase/stock', loadChildren: () => import('./purchase-stock/purchase-stock.module').then(m => m.PurchaseStockModule) },
      { path: 'purchase/custom', loadChildren: () => import('./purchase-custom/purchase-custom.module').then(m => m.PurchaseCustomModule) },
      { path: 'admin/template', loadChildren: () => import('./admin/template/index.module').then(m => m.AdminTemplateIndexModule) },
      { path: 'admin/home-page-section', loadChildren: () => import('./admin/home-page-section/index.module').then(m => m.AdminHomePageSectionIndexModule) },
      { path: '**', component: InvalidRouteComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
