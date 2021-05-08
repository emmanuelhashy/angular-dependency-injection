import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContactComponent } from './recent-contact.component';

describe('RecentContactComponent', () => {
  let component: RecentContactComponent;
  let fixture: ComponentFixture<RecentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
