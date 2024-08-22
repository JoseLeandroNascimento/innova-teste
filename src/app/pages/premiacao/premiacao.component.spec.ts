import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiacaoComponent } from './premiacao.component';

describe('PremiacaoComponent', () => {
  let component: PremiacaoComponent;
  let fixture: ComponentFixture<PremiacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
