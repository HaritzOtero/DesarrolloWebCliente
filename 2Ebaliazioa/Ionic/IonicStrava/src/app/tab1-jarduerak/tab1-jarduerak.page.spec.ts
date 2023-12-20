import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1JarduerakPage } from './tab1-jarduerak.page';

describe('Tab1JarduerakPage', () => {
  let component: Tab1JarduerakPage;
  let fixture: ComponentFixture<Tab1JarduerakPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab1JarduerakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
