import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeResultadoComponent } from './exibe-resultado.component';

describe('ExibeResultadoComponent', () => {
  let component: ExibeResultadoComponent;
  let fixture: ComponentFixture<ExibeResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeResultadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
