import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KlubaGehituPage } from './kluba-gehitu.page';

describe('KlubaGehituPage', () => {
  let component: KlubaGehituPage;
  let fixture: ComponentFixture<KlubaGehituPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KlubaGehituPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
