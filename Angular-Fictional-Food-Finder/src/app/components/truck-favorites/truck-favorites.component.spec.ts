import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckFavoritesComponent } from './truck-favorites.component';

describe('TruckFavoritesComponent', () => {
  let component: TruckFavoritesComponent;
  let fixture: ComponentFixture<TruckFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
