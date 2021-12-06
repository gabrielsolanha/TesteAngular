import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaPerguntaComponent } from './inicia-pergunta.component';

describe('IniciaPerguntaComponent', () => {
  let component: IniciaPerguntaComponent;
  let fixture: ComponentFixture<IniciaPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaPerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
