import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofiiProjectDetailsComponent } from './sofii-project-details.component';

describe('SofiiProjectDetailsComponent', () => {
  let component: SofiiProjectDetailsComponent;
  let fixture: ComponentFixture<SofiiProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SofiiProjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SofiiProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
