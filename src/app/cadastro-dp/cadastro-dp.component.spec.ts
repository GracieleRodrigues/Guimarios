import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDpComponent } from './cadastro-dp.component';

describe('CadastroDpComponent', () => {
  let component: CadastroDpComponent;
  let fixture: ComponentFixture<CadastroDpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
