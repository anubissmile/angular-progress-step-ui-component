import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProgressStepModel } from './shared/factory/progress-step.factory';


@Component({
  selector: 'ieat-progress-step',
  templateUrl: 'progress-step.component.html',
  styleUrls: ['progress-step.component.scss']
})
export class ProgressStepComponent implements OnInit {

  @Input() progressModels: ProgressStepModel[] = [];

  @Output() stepClick = new EventEmitter();

  ngOnInit(): void {}

  configureStepStyle(prog: ProgressStepModel): any {
    const style: any = {
      step: true,
      'is-active': false,
      'is-complete': false
    };
    if (!prog) { return style; }
    if (prog.isActive) { style['is-active'] = true; }
    if (prog.isComplete) { style['is-complete'] = true; }
    return style;
  }

  onStepClick(step: ProgressStepModel): void {
    this.stepClick.emit(step);
  }

}
