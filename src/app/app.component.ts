import { Component } from '@angular/core';
import { CurrencyService } from './currency-convertor/services/currency.service';
import  {Responses} from './currency-convertor/model/response';
import { Currency } from './currency-convertor/model/currency';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  result;
  
  _currency=new Currency
  constructor(private currencyService:CurrencyService){}

  convertCurrency($event){

    this.getRate($event);
    
    setInterval(()=>{
      this.getRate($event);
    },10000);
        
  }

  getRate($event){
    this._currency.amount=$event['amount'];
    this._currency.type=""
    this.currencyService.convertCurrency(this._currency).subscribe(response=>{ 
     this.result=response.amount
    });
  }


}
