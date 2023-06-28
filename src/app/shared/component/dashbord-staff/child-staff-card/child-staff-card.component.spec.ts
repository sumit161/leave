import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStaffCardComponent } from './child-staff-card.component';

describe('ChildStaffCardComponent', () => {
  let component: ChildStaffCardComponent;
  let fixture: ComponentFixture<ChildStaffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildStaffCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildStaffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
