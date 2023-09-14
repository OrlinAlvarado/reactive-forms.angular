import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

  //   const email = control.value
  //   console.log(email)
  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    const email = control.value

    const httpCallObservable = new Observable< ValidationErrors | null>((subscriber) => {
      if ( email === 'orlin@google.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        // return; // NO es necesario ya que al ejecutar el complete, ya no se emiten valores
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(3000)
    )

    return httpCallObservable;
  }
}
