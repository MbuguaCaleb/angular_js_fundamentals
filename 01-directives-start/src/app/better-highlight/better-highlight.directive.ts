import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  /*we may bind to our custom attribute directives from outside just as we do with components 
   thus making them receive dynamic properties from outside which is much better.
   
   The custom directive therefore becomes very much like a component.
  */

  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highlightColor:string='blue';

  /*used in cases where i wish to change the style of my element 
    and i do not want to use the render.
    It is another approach

    The below means that on the element that has been selected , change the 
    style backgrounf color

    Initial value of style has been set to transparent

  */
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor( private elRef:ElementRef, private renderer:Renderer2) {


  }
  //ngOnit is the best place to run the code which you wish
  //executed once the compoment has been mounted.
  //It works better than the constructor.
  //contructor is best for highlightng the properties of the class.

  ngOnInit() {
    this.backgroundColor=this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');    
  }

  //convenient way of listening to events on the custom directive
  //Takes in the type of event it is listening to as an argument
  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor=this.defaultColor;  
  }
 
}
