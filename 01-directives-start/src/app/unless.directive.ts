import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {

  /*
  custom structural directive
  set is a method that get execured when the input propery we are binding to changes.

  The propery name which changes causing trigger should have the same name as the directive
  */
  @Input() set appUnless(condition:boolean){   
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }


  /*Rember that this is a structural directive and therefore it has to accept a template
  
    Rember as well how just structural directives are rendered in the background..

    They are just an ng template that is rendered conditionally and the *if just represents a shorthand 
    of the whole process.

    constuctor takes in two parameters which is the template and where to render the template.

  */
  constructor(private templateRef:TemplateRef<any>, private vcRef: ViewContainerRef) {


   }

}
