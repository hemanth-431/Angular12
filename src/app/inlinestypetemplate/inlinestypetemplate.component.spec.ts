import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinestypetemplateComponent } from './inlinestypetemplate.component';

describe('InlinestypetemplateComponent', () => {
  let component: InlinestypetemplateComponent;
  let fixture: ComponentFixture<InlinestypetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinestypetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinestypetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
