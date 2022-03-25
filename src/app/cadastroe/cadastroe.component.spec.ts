import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroeComponent } from './cadastroe.component';

describe('CadastroeComponent', () => {
  let component: CadastroeComponent;
  let fixture: ComponentFixture<CadastroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
