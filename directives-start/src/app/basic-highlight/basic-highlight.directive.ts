import { Directive, ElementRef, OnInit } from "@angular/core";

//My  own custom attribute directive
@Directive({
    selector: '[appBasicHighlight]'
})

//When i put a square bracket as above it means 
//than in my template i will not include [] in this custom attribute directive 
export class BasicHiglightDirective implements OnInit
{
    constructor(private elementRef:ElementRef){

        //private assign elementref as a propery with the value the
        //element ref being received.
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }
    
}