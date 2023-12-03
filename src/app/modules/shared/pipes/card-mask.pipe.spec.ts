import { CardMaskPipe } from './card-mask.pipe';

let pipe: CardMaskPipe;

beforeEach(() => {
  pipe = new CardMaskPipe();
});

it('should return masked card number when isHideInfo is true', () => {
  const cardNumber = '1234567812345678';
  const isHideInfo = true;
  const result = pipe.transform(cardNumber, isHideInfo);
  expect(result).toEqual('••••  ••••  ••••  5678');
});

it('should return formatted card number when isHideInfo is false', () => {
  const cardNumber = '1234567812345678';
  const isHideInfo = false;
  const result = pipe.transform(cardNumber, isHideInfo);
  expect(result).toEqual('1234  5678  1234  5678');
});

it('should handle empty card number', () => {
  const cardNumber = '';
  const isHideInfo = false;
  const result = pipe.transform(cardNumber, isHideInfo);
  expect(result).toEqual('');
});

it('should handle card number with less than 4 digits', () => {
  const cardNumber = '123';
  const isHideInfo = false;
  const result = pipe.transform(cardNumber, isHideInfo);
  expect(result).toEqual('123');
});
