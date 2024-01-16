import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JardueraGehituPage } from './jarduera-gehitu.page';

describe('JardueraGehituPage', () => {
  let component: JardueraGehituPage;
  let fixture: ComponentFixture<JardueraGehituPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JardueraGehituPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
