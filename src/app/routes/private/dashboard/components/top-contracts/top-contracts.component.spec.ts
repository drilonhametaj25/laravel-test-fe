import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContractsComponent } from './top-contracts.component';

describe('TopContractsComponent', () => {
  let component: TopContractsComponent;
  let fixture: ComponentFixture<TopContractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopContractsComponent]
    });
    fixture = TestBed.createComponent(TopContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
