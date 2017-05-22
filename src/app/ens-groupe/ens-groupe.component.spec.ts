import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsGroupeComponent } from './ens-groupe.component';

describe('EnsGroupeComponent', () => {
  let component: EnsGroupeComponent;
  let fixture: ComponentFixture<EnsGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
