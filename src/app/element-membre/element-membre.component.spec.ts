import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementMembreComponent } from './element-membre.component';

describe('ElementMembreComponent', () => {
  let component: ElementMembreComponent;
  let fixture: ComponentFixture<ElementMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
