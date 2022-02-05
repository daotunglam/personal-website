import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectsFullDetailComponent } from './dialog-projects-full-detail.component';

describe('DialogProjectsFullDetailComponent', () => {
  let component: DialogProjectsFullDetailComponent;
  let fixture: ComponentFixture<DialogProjectsFullDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectsFullDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectsFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
