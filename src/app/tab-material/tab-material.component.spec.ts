import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMaterialComponent } from './tab-material.component';

describe('TabMaterialComponent', () => {
  let component: TabMaterialComponent;
  let fixture: ComponentFixture<TabMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
