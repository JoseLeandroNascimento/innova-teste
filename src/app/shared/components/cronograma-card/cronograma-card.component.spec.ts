import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaCardComponent } from './cronograma-card.component';

describe('CronogramaCardComponent', () => {
  let component: CronogramaCardComponent;
  let fixture: ComponentFixture<CronogramaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronogramaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronogramaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
