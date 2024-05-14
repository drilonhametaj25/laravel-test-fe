import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsStatsComponent } from './contracts-stats.component';

describe('ContractsStatsComponent', () => {
  let component: ContractsStatsComponent;
  let fixture: ComponentFixture<ContractsStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractsStatsComponent]
    });
    fixture = TestBed.createComponent(ContractsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
