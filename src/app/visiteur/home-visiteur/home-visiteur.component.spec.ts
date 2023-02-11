import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisiteurComponent } from './home-visiteur.component';

describe('HomeVisiteurComponent', () => {
  let component: HomeVisiteurComponent;
  let fixture: ComponentFixture<HomeVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVisiteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
