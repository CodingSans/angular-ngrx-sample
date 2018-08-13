import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { countries } from '../data/countries';

@Injectable()
export class CountryService {
  getCountries() {
    return of(countries);
  }
}
