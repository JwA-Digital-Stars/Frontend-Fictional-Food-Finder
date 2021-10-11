import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckFinderComponent } from './truck-finder.component';

describe('TruckFinderComponent', () => {
  let component: TruckFinderComponent;
  let fixture: ComponentFixture<TruckFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
