import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEnComponent } from './cadastro-en.component';

describe('CadastroEnComponent', () => {
  let component: CadastroEnComponent;
  let fixture: ComponentFixture<CadastroEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
