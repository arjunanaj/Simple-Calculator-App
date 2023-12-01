import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:string='';
  num2:string='';
  result:number=0;
  operator:string=''
  dropdownlist:string='choose'
    onclick(operator:string){
      if(operator=='+'){
        this.dropdownlist="ADD"
      }
      if(operator=='-'){
        this.dropdownlist="SUB"
      }
      if(operator=='*'){
        this.dropdownlist="MULTIPLY"
      }
      if(operator=='/'){
        this.dropdownlist="DIVIDE"
      }
  
    }
   onselect(num1:string,num2:string,operator:string){
    
    if(operator=='+'){
      this.result= parseInt(num1)+parseInt(num2);
     this.num1=''
     this.num2=''
     this.dropdownlist="choose"
    }
    if(operator=='-'){
      this.result= parseInt(num1)-parseInt(num2);
      this.num1=''
      this.num2=''
      this.dropdownlist="choose"
    }
    if(operator=='*'){
      this.result= parseInt(num1)*parseInt(num2);
      this.num1=''
      this.num2=''
      this.dropdownlist="choose"
      
    }
    if(operator=='/'){
      this.result= parseInt(num1)/parseInt(num2);
      this.num1=''
      this.num2=''
      this.dropdownlist="choose"
    }

}
}
