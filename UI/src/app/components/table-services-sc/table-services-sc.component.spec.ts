/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableServicesSCComponent } from './table-services-sc.component';

describe('TableServicesSCComponent', () => {
  let component: TableServicesSCComponent;
  let fixture: ComponentFixture<TableServicesSCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableServicesSCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableServicesSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
