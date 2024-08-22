import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioCardComponent } from './desafio-card.component';

describe('DesafioCardComponent', () => {
  let component: DesafioCardComponent;
  let fixture: ComponentFixture<DesafioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafioCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesafioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
