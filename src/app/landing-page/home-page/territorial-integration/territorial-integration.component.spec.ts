import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorialIntegrationComponent } from './territorial-integration.component';

describe('TerritorialIntegrationComponent', () => {
  let component: TerritorialIntegrationComponent;
  let fixture: ComponentFixture<TerritorialIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerritorialIntegrationComponent]
    });
    fixture = TestBed.createComponent(TerritorialIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
