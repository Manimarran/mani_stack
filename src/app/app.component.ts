import { Component, OnInit, VERSION } from '@angular/core';
import { FormModel } from './form.model';
import {
  DynamicFormArrayModel,
  DynamicFormControlModel,
  DynamicFormLayout,
  DynamicFormModel,
  DynamicFormService,
} from '@ng-dynamic-forms/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formGroup: FormGroup;
  formGroup1: FormGroup;
  formTemplate: DynamicFormControlModel[] = FormModel;
  formArrayModel: any;
  formArrayControl: any;
  constructor(private formService: DynamicFormService) {
    console.log('Welcome')
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formTemplate);
  }

  register() {
    console.log(this.formGroup1);
  }
}
