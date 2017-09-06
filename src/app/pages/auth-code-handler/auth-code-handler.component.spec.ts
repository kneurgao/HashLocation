import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCodeHandlerComponent } from './auth-code-handler.component';

describe('AuthCodeHandlerComponent', () => {
  let component: AuthCodeHandlerComponent;
  let fixture: ComponentFixture<AuthCodeHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCodeHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCodeHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
