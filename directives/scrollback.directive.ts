import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollback]'
})
export class ScrollbackDirective {
  @Input() appScrollback:any;
  constructor(private el:ElementRef) { }

  @HostListener("click") 
  onClick():void{
      
      let temp=this.el.nativeElement.parentNode;
      console.log(temp);
       temp=temp.children[3];
      temp.scrollTo({ left: (temp.scrollLeft - this.appScrollback), behavior: 'smooth' });
      
      console.log(temp);
      console.log();
  }
 
}

