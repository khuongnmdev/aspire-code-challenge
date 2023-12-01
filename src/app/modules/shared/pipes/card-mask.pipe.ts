import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
/**
 * The CardMaskPipe class is responsible for transforming a given card number by masking it partially.
 * If isHideInfo is true, the pipe masks the card number partially by replacing all but the last 4 digits with asterisks.
 * Otherwise, the pipe formats the card number by inserting a space after every 4 digits.
 */

export class CardMaskPipe implements PipeTransform {
  transform(cardNumber: string, isHideInfo: boolean): string {
    if (isHideInfo) {
      return `**** **** **** ${cardNumber.slice(-4)}`;
    }
    return cardNumber.replace(/(\d{4})/g, '$1 ').trim();
  }
}
