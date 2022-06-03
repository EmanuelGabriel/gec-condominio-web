/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarChartVeiculosBlocosComponent } from './bar-chart-veiculos-blocos.component';

describe('BarChartVeiculosBlocosComponent', () => {
  let component: BarChartVeiculosBlocosComponent;
  let fixture: ComponentFixture<BarChartVeiculosBlocosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartVeiculosBlocosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartVeiculosBlocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
