import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbehaviourComponent } from './signupbehaviour.component';

describe('SignupbehaviourComponent', () => {
  let component: SignupbehaviourComponent;
  let fixture: ComponentFixture<SignupbehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupbehaviourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupbehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
