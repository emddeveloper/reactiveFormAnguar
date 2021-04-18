import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewsComponent } from './card-views.component';

describe('CardViewsComponent', () => {
  let component: CardViewsComponent;
  let fixture: ComponentFixture<CardViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
