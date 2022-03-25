import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodpComponent } from './cadastrodp.component';

describe('CadastrodpComponent', () => {
  let component: CadastrodpComponent;
  let fixture: ComponentFixture<CadastrodpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrodpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrodpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
