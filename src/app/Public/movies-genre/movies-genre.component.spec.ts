import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGenreComponent } from './movies-genre.component';

describe('MoviesGenreComponen', () => {
  let component: MoviesGenreComponent;
  let fixture: ComponentFixture<MoviesGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
