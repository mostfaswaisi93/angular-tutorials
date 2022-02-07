import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[],inputValue:string) {
  
    if(!inputValue) return products;
    return products.filter(item => {
       if(item.name) {
          return item.name.toLowerCase().includes(inputValue.toLowerCase())
       }
     })
  }

}
