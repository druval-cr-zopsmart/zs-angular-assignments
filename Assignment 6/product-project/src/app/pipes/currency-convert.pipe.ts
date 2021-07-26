import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert'
})
export class CurrencyConvertPipe implements PipeTransform {

  transform(amount: number, currency: string): number {
    let convertedAmount = null;
    switch (currency) {
      default: // default: convert to USD
        convertedAmount = parseFloat((amount/75).toFixed(2));
        break;
    }
    return convertedAmount;
  }
}
