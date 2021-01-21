import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProgressStepComponent } from './progress-step.component';
import { ProgressStepFactory } from './shared/factory/progress-step.factory';

describe('Verify ProgressStepComponent could be...', () => {
  let component: ProgressStepComponent;
  let fixture: ComponentFixture<ProgressStepComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProgressStepComponent
      ],
      providers: []
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProgressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ProgressStepComponent should be initialize properly.', () => {
    expect(component).toBeTruthy();
  });

  describe('Verify configureStepStyle() could be...', () => {

    it('configureStepStyle() should return step as \'true\' when argument is unavailable.', () => {
      const result = component.configureStepStyle(null);
      expect(result.step).toEqual(true);
    });

    it('configureStepStyle() should made step active when isActive is \'true\'.', () => {
      const prog = ProgressStepFactory.getDefault(false, true);
      const result = component.configureStepStyle(prog);
      expect(result.step).toEqual(true);
      expect(result['is-active']).toEqual(true);
      expect(result['is-complete']).toEqual(false);
    });

    it('configureStepStyle() should made step complete when isComplete is \'true\'.', () => {
      const prog = ProgressStepFactory.getDefault(true, false);
      const result = component.configureStepStyle(prog);
      expect(result.step).toEqual(true);
      expect(result['is-active']).toEqual(false);
      expect(result['is-complete']).toEqual(true);
    });

    it('configureStepStyle() should made step active and complete when all is true.', () => {
      const prog = ProgressStepFactory.getDefault(true, true);
      const result = component.configureStepStyle(prog);
      expect(result.step).toEqual(true);
      expect(result['is-active']).toEqual(true);
      expect(result['is-complete']).toEqual(true);
    });

  });

});
