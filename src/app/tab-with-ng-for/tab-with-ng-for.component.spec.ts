import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWithNgForComponent } from './tab-with-ng-for.component';

describe('TabWithNgForComponent', () => {
  let component: TabWithNgForComponent;
  let fixture: ComponentFixture<TabWithNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabWithNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWithNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
