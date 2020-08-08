import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCustomComponent } from './purchase-custom.component';

describe('PurchaseCustomComponent', () => {
  let component: PurchaseCustomComponent;
  let fixture: ComponentFixture<PurchaseCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
