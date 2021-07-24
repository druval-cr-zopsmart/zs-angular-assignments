import { Directive } from '@angular/core';
import { 
  AbstractControl, 
  NG_VALIDATORS, 
  ValidationErrors, 
  Validator, 
  ValidatorFn 
} from '@angular/forms';

export function productNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value && control.value.trim().length > 0;
    return isValid ? null : { name: { value: control.value } };
  };
}

@Directive({
  selector: '[appProductName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ProductNameDirective, multi: true}]
})
export class ProductNameDirective implements Validator {

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    return productNameValidator()(control);
  }
}
