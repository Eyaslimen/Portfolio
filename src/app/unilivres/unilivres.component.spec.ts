import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnilivresComponent } from './unilivres.component';

describe('UnilivresComponent', () => {
  let component: UnilivresComponent;
  let fixture: ComponentFixture<UnilivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnilivresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnilivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
