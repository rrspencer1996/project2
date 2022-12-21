import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinListComponent } from './fin-list.component';

describe('FinListComponent', () => {
  let component: FinListComponent;
  let fixture: ComponentFixture<FinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
