import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourmComponent } from './fourm.component';

describe('FourmComponent', () => {
  let component: FourmComponent;
  let fixture: ComponentFixture<FourmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
