import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailComponent } from './fulldetail.component';

describe('FulldetailComponent', () => {
  let component: FulldetailComponent;
  let fixture: ComponentFixture<FulldetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FulldetailComponent]
    });
    fixture = TestBed.createComponent(FulldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
