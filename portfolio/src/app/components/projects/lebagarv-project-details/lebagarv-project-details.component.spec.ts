import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebagarvProjectDetailsComponent } from './lebagarv-project-details.component';

describe('LebagarvProjectDetailsComponent', () => {
  let component: LebagarvProjectDetailsComponent;
  let fixture: ComponentFixture<LebagarvProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LebagarvProjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LebagarvProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
