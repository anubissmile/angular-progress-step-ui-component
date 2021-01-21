import { ProgressStepInterface } from '../interface/progress-step.interface';

export class ProgressStepModel implements ProgressStepInterface {
  index = 0;
  name: string;
  stepName: string;
  isComplete = false;
  isActive = false;
}

export class ProgressStepFactory {

  public static get(): ProgressStepModel {
    return new ProgressStepModel();
  }

  public static getDefault(isComplete = false, isActive = false): ProgressStepModel {
    return {
      index: 0,
      name: 'Lorem',
      stepName: '',
      isComplete,
      isActive
    } as ProgressStepModel;
  }

  public static getDefaults(iterator: number = 1): ProgressStepModel[] {
    const obj: ProgressStepModel[] = [];
    for (let i = 0; i < iterator; i++) {
      const def = this.getDefault();
      def.index = i;
      def.stepName = `${i + 1}`;
      obj.push(def);
    }
    return obj;
  }
}
