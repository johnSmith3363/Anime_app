import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTomeComponent } from './anime-tome.component';

describe('AnimeTomeComponent', () => {
  let component: AnimeTomeComponent;
  let fixture: ComponentFixture<AnimeTomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeTomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeTomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
