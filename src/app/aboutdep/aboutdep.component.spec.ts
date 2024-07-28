import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdepComponent } from './aboutdep.component';

describe('AboutdepComponent', () => {
  let component: AboutdepComponent;
  let fixture: ComponentFixture<AboutdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
