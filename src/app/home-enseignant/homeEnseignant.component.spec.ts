import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnseignantComponent } from './homeEnseignant.component';

describe('HomeComponent', () => {
  let component: HomeEnseignantComponent;
  let fixture: ComponentFixture<HomeEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
