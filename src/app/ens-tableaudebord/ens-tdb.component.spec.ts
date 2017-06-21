import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbComponent } from './ens-tdb.component';

describe('LoginComponent', () => {
  let component: TdbComponent;
  let fixture: ComponentFixture<TdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
