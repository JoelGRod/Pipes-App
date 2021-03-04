import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customFly'
})
export class FlyPipe implements PipeTransform {

    transform( value: boolean ): string {
        return (value) ? "can fly" : "can't fly";
    }

}