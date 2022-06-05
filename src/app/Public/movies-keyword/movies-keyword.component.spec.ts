import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesKeywordComponent } from './movies-keyword.component';

describe('MoviesKeywordComponent', () => {
  let component: MoviesKeywordComponent;
  let fixture: ComponentFixture<MoviesKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
