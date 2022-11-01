import { Component, OnInit, VERSION } from '@angular/core';
import { FormModel } from './form.model';
import {
  DynamicFormControlModel,
  DynamicFormModel,
  DynamicFormService,
} from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formGroup: FormGroup;
  formTemplate: DynamicFormControlModel[] = FormModel;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formTemplate);
  }
}
