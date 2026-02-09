import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesEjecutoras } from './unidades-ejecutoras';

describe('UnidadesEjecutoras', () => {
  let component: UnidadesEjecutoras;
  let fixture: ComponentFixture<UnidadesEjecutoras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadesEjecutoras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesEjecutoras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
