import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskillsComponent } from './myskills.component';

describe('MyskillsComponent', () => {
  let component: MyskillsComponent;
  let fixture: ComponentFixture<MyskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyskillsComponent]
    });
    fixture = TestBed.createComponent(MyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
