import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsJalonsComponent } from './ens-jalons.component';

describe('EnsJalonsComponent', () => {
  let component: EnsJalonsComponent;
  let fixture: ComponentFixture<EnsJalonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsJalonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsJalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
