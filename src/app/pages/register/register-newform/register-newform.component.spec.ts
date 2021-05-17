import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewformComponent } from './register-newform.component';

describe('RegisterNewformComponent', () => {
  let component: RegisterNewformComponent;
  let fixture: ComponentFixture<RegisterNewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
