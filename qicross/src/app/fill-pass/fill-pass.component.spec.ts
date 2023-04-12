import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillPassComponent } from './fill-pass.component';

describe('FillPassComponent', () => {
  let component: FillPassComponent;
  let fixture: ComponentFixture<FillPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
