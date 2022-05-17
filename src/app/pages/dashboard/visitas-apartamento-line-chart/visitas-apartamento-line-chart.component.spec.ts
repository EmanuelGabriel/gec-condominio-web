/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisitasApartamentoLineChartComponent } from './visitas-apartamento-line-chart.component';

describe('VisitasApartamentoLineChartComponent', () => {
  let component: VisitasApartamentoLineChartComponent;
  let fixture: ComponentFixture<VisitasApartamentoLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasApartamentoLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasApartamentoLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
