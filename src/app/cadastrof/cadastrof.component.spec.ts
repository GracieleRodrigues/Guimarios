import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofComponent } from './cadastrof.component';

describe('CadastrofComponent', () => {
  let component: CadastrofComponent;
  let fixture: ComponentFixture<CadastrofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
