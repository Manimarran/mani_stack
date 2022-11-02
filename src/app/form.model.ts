import {
  DynamicFormModel,
  DynamicInputModel,
  DynamicCheckboxModel,
  DynamicFormArrayModel,
  DynamicRadioGroupModel,
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicSelectModel,
  DynamicTextAreaModel,
} from '@ng-dynamic-forms/core';

export const FormModel: DynamicFormControlModel[] = [
  new DynamicFormGroupModel({
    id: 'basicDetails',
    legend: 'Basic Details',
    group: [
      new DynamicInputModel({
        id: 'firstName',
        label: 'First Name',
        required: true,
        value: '',
        placeholder: 'Enter the first name',
      }),
      new DynamicInputModel({
        id: 'lastName',
        label: 'Last Name',
        required: false,
        value: '',
        placeholder: 'Enter the last name',
      }),
      new DynamicSelectModel({
        id: 'gender',
        label: 'Gender',
        value: '',
        required: true,
        options: [
          {
            label: 'Male',
            value: '1',
          },
          {
            label: 'Female',
            value: '2',
          },
        ],
      }),

      new DynamicInputModel({
        id: 'emailId',
        label: 'Email Id',
        required: false,
        value: '',
        placeholder: 'Enter valid email id',
      }),
      new DynamicInputModel({
        id: 'mobNo',
        label: 'Mobile No',
        required: false,
        value: '',
        placeholder: 'Enter the mobile no',
      }),

      new DynamicFormArrayModel({
        id: 'parentFormArray',
        groupFactory: () => {
          return [
            new DynamicTextAreaModel({
              id: 'address',
              label: 'Address',
            }),
            new DynamicInputModel({
              id: 'city',
              label: 'City',
            }),
            new DynamicInputModel({
              id: 'state',
              label: 'State',
            }),
            new DynamicInputModel({
              id: 'counrty',
              label: 'Country',
            }),
          ];
        },
      }),

      new DynamicCheckboxModel({
        id: 'sampleCheckbox',
        label: 'I do agree',
      }),
    ],
  }),
];
