import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterPrecosComponent } from './obter-precos.component';

describe('ObterPrecosComponent', () => {
  let component: ObterPrecosComponent;
  let fixture: ComponentFixture<ObterPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObterPrecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObterPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
