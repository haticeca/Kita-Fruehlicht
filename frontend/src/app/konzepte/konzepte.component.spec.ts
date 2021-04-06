import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzepteComponent } from './konzepte.component';

describe('KonzepteComponent', () => {
  let component: KonzepteComponent;
  let fixture: ComponentFixture<KonzepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
