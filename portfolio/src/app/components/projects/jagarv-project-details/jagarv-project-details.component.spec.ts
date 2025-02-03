import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagarvProjectDetailsComponent } from './jagarv-project-details.component';

describe('JagarvProjectDetailsComponent', () => {
  let component: JagarvProjectDetailsComponent;
  let fixture: ComponentFixture<JagarvProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JagarvProjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JagarvProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
