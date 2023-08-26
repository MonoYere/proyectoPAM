import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearTrabajadoresPage } from './crear-trabajadores.page';

describe('CrearTrabajadoresPage', () => {
  let component: CrearTrabajadoresPage;
  let fixture: ComponentFixture<CrearTrabajadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearTrabajadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
