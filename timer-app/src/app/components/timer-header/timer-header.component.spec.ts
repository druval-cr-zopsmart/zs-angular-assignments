import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerHeaderComponent } from './timer-header.component';

describe('TimerHeaderComponent', () => {
  let component: TimerHeaderComponent;
  let fixture: ComponentFixture<TimerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
