import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersActivityStatsComponent } from './users-activity-stats.component';

describe('UsersActivityStatsComponent', () => {
  let component: UsersActivityStatsComponent;
  let fixture: ComponentFixture<UsersActivityStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersActivityStatsComponent]
    });
    fixture = TestBed.createComponent(UsersActivityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
