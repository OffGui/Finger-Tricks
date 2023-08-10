import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOsProdutosComponent } from './todos-os-produtos.component';

describe('TodosOsProdutosComponent', () => {
  let component: TodosOsProdutosComponent;
  let fixture: ComponentFixture<TodosOsProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosOsProdutosComponent]
    });
    fixture = TestBed.createComponent(TodosOsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
