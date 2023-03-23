import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordvalidator(control:AbstractControl):ValidationErrors|null{
const confirmPassword=control.value
const Password=control.root.get('Password')?.value;

if(Password !==confirmPassword){
    return{ispasswordmismatch:true}
}
else{ return null
 }

}