import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHeaderComponent } from './counter-header.component';

describe('CounterHeaderComponent', () => {
  let component: CounterHeaderComponent;
  let fixture: ComponentFixture<CounterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
