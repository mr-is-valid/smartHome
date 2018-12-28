import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWaterComponent } from './auto-water.component';

describe('AutoWaterComponent', () => {
  let component: AutoWaterComponent;
  let fixture: ComponentFixture<AutoWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
