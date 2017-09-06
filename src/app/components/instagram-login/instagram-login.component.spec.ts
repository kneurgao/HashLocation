import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLoginComponent } from './instagram-login.component';

describe('InstagramLoginComponent', () => {
  let component: InstagramLoginComponent;
  let fixture: ComponentFixture<InstagramLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
