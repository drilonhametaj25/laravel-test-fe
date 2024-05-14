import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error = password === confirmPassword ? false : true;
    return error ? {forbiddenName: {value: control.value}} : null;
  };
}
