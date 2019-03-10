import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertorWidget } from './components/convertor-widget/convertor-widget.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    
  ],
  
  declarations: [
    ConvertorWidget
  ],
  exports: [
    ConvertorWidget
  ],
  providers:[
    CurrencyService
  ]
})
export class CurrencyConvertorModule { }
