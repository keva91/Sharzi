import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsProjetComponent } from './ens-projet.component';

describe('EnsProjetComponent', () => {
  let component: EnsProjetComponent;
  let fixture: ComponentFixture<EnsProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
