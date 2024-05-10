import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfuluComponent } from './mindfulu.component';

describe('MindfuluComponent', () => {
  let component: MindfuluComponent;
  let fixture: ComponentFixture<MindfuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfuluComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
