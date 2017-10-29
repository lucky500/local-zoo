import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
    name: "ageFilter",
    pure: false
})

export class AgeFilterPipe implements PipeTransform {
    transform(input: Animal[], desiredFilter){
        let output: Animal[] = [];
        if(desiredFilter === "animalsUnderTwo") {
            for(var i = 0; i < input.length; i++){
                if(input[i].age <= 2){
                    output.push(input[i]);
                }
            }
            return output;
        } else if (desiredFilter === "animalsOverTwo"){
            for(var i = 0; i < input.length; i++){
                if(input[i].age > 2){
                    output.push(input[i]);
                }
            }
            return output; 
        } else {
            return input;
        }
    }
}