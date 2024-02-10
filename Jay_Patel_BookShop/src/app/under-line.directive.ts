import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderLine]',
  standalone: true
})
export class UnderLineDirective {

  constructor(private el:ElementRef) { }
    @HostListener('mouseenter') onmouseenter(){
      this.addLine();
    }
    @HostListener('mouseleave') onmouseleave(){
      this.removeLine();
    }
    addLine(){
      this.el.nativeElement.style.textDecoration = 'underline';
    }
    removeLine(){
      this.el.nativeElement.style.textDecoration = 'none'; 
    }

}
