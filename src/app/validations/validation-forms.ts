import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

export class UserValidator {

  static verificarEspacios (c: AbstractControl) {
    if( c.value != null )
      return {sinEspacios: true};
  }
}
