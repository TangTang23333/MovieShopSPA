import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardBriefComponent } from './movie-card-brief.component';

describe('MovieCardBriefComponent', () => {
  let component: MovieCardBriefComponent;
  let fixture: ComponentFixture<MovieCardBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
