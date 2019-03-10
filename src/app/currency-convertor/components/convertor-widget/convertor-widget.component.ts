import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'convertor-widget',
  templateUrl: './convertor-widget.component.html',
  
})
export class ConvertorWidget implements OnInit {

  @Output('getConvertionData') convertionData = new EventEmitter();
  
  currencies;
  selectedCurrency;
  amount;

  constructor() { 
    this.amount=0;
    this.selectedCurrency="";
    this.currencies = [
      {'id':1, 'name':'INR'},
      {'id':2, 'name':'CAD'},
      {'id':3, 'name':'GBP'}
    ]
  }

  
  ngOnInit() {
  }

  sendConvertData(){
    
    let dataToEmit ={
      'currency':this.selectedCurrency,
      'amount'  :this.amount      
    };
    this.convertionData.emit(dataToEmit);
    

  }
}