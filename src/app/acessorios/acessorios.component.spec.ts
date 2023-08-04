import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosComponent } from './acessorios.component';

describe('AcessoriosComponent', () => {
  let component: AcessoriosComponent;
  let fixture: ComponentFixture<AcessoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoriosComponent]
    });
    fixture = TestBed.createComponent(AcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
