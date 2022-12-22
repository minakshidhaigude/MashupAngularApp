import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodonotesComponent } from './todonotes.component';

describe('TodonotesComponent', () => {
  let component: TodonotesComponent;
  let fixture: ComponentFixture<TodonotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodonotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodonotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
