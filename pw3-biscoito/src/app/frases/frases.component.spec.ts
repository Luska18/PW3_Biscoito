import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrasesComponent } from './frases.component';

describe('FrasesComponent', () => {
  let component: FrasesComponent;
  let fixture: ComponentFixture<FrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
