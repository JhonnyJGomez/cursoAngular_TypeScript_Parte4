import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetalleComponent } from './articulo-detalle.component';

describe('ArticuloDetalleComponent', () => {
  let component: ArticuloDetalleComponent;
  let fixture: ComponentFixture<ArticuloDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
