import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEventosComponent } from './eliminar-eventos.component';

describe('EliminarEventosComponent', () => {
  let component: EliminarEventosComponent;
  let fixture: ComponentFixture<EliminarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
