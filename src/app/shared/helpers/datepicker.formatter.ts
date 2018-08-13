import { NgrxValueConverter } from 'ngrx-forms';
import * as moment from 'moment';

export class DateToString implements NgrxValueConverter<Date, string> {
  convertViewToStateValue(date: Date): string {
    if (!date) {
      return null;
    }
    const offset = moment(date).utcOffset();
    return moment(date).add(offset, 'minutes').toJSON();
  }

  convertStateToViewValue(dateString: string): Date {
    return moment.utc(dateString).toDate();
  }
}
