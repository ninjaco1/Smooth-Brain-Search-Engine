import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebscrapComponentComponent } from './webscrap-component.component';

describe('WebscrapComponentComponent', () => {
  let component: WebscrapComponentComponent;
  let fixture: ComponentFixture<WebscrapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebscrapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebscrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
