import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourmBoxComponent } from './fourm-box.component';

describe('FourmBoxComponent', () => {
  let component: FourmBoxComponent;
  let fixture: ComponentFixture<FourmBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourmBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
