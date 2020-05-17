import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSidebarComponent } from './r-sidebar.component';

describe('RSidebarComponent', () => {
  let component: RSidebarComponent;
  let fixture: ComponentFixture<RSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
