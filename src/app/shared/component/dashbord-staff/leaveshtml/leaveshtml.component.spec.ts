import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveshtmlComponent } from './leaveshtml.component';

describe('LeaveshtmlComponent', () => {
  let component: LeaveshtmlComponent;
  let fixture: ComponentFixture<LeaveshtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveshtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveshtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
