import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilComponentComponent } from './my-profil-component.component';

describe('MyProfilComponentComponent', () => {
  let component: MyProfilComponentComponent;
  let fixture: ComponentFixture<MyProfilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfilComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
