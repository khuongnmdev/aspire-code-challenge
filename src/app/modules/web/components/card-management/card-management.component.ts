import { Component, OnInit } from '@angular/core';
import { CardType } from '../../../core/models/card';

const MOCK_DATA = [{
	id: '',
	cardHolderName: 'Name On Card',
	cardNumber: '1234567812345678',
	expirationDate: '12/34',
	cvvNumber: 123,
	isHideInfo: false,
},
{
	id: '',
	cardHolderName: 'Name On Card',
	cardNumber: '1234567812345678',
	expirationDate: '12/34',
	cvvNumber: 123,
	isHideInfo: false,
},
{
	id: '',
	cardHolderName: 'Name On Card',
	cardNumber: '1234567812345678',
	expirationDate: '12/34',
	cvvNumber: 123,
	isHideInfo: false,
}];

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss']
})
export class CardManagementComponent implements OnInit {

  public readonly cardList: CardType[] = [];
  constructor() { }

  ngOnInit() {
  }

}
