import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardPurchaseComponent } from './movie-card-purchase.component';

describe('MovieCardPurchaseComponent', () => {
  let component: MovieCardPurchaseComponent;
  let fixture: ComponentFixture<MovieCardPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
