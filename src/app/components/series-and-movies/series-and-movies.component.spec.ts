import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAndMoviesComponent } from './series-and-movies.component';

describe('SeriesAndMoviesComponent', () => {
  let component: SeriesAndMoviesComponent;
  let fixture: ComponentFixture<SeriesAndMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesAndMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesAndMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
