import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozyComponent } from './cozy.component';

describe('CozyComponent', () => {
  let component: CozyComponent;
  let fixture: ComponentFixture<CozyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CozyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CozyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
