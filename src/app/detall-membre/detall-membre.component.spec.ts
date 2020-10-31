import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallMembreComponent } from './detall-membre.component';

describe('DetallMembreComponent', () => {
  let component: DetallMembreComponent;
  let fixture: ComponentFixture<DetallMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
