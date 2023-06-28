import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordHodComponent } from './dashbord-hod.component';

describe('DashbordHodComponent', () => {
  let component: DashbordHodComponent;
  let fixture: ComponentFixture<DashbordHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordHodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
