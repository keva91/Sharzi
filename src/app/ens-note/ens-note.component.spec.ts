import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsNoteComponent } from './ens-note.component';

describe('EnsNoteComponent', () => {
  let component: EnsNoteComponent;
  let fixture: ComponentFixture<EnsNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
