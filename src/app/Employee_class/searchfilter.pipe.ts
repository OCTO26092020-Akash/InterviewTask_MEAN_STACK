import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform( employees: Employee[], filterText: string): Employee[] {


    
    return employees ? employees.filter(item => item.Name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
