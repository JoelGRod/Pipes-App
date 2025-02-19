import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customUppercase'
})
export class UppercasePipe implements PipeTransform {

    transform(value: string, isUpper: boolean = true): string {
        return (isUpper) ? value.toUpperCase() : value.toLowerCase();
    }

}