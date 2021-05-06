import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number ): string {

    let citizentype: string;

    if (value>= 60){
      citizentype= value + ' | Senior-Citizen';
    }
    else if (value>=30 && value<60){
      citizentype= value + ' | Adult';
    }
    else if (value>=20 && value<30){
      citizentype= value + ' | Youth';
    }
    else if (value>=13 && value<20){
      citizentype= value + ' | Teenage';
    }
    else{
      citizentype= value + ' | Child';
    }
    return citizentype;
  }

}
