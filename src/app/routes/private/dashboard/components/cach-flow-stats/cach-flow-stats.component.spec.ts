import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachFlowStatsComponent } from './cach-flow-stats.component';

describe('CachFlowStatsComponent', () => {
  let component: CachFlowStatsComponent;
  let fixture: ComponentFixture<CachFlowStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CachFlowStatsComponent]
    });
    fixture = TestBed.createComponent(CachFlowStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
