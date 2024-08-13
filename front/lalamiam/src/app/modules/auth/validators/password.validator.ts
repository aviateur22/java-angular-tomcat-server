import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
  return (formGroup: AbstractControl):{[key: string]: boolean} | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {

      return { passwordMismatch: true };
    }
    return null;
  }
}
