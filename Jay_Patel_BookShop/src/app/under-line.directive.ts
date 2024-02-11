import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appUnderLine]',
  standalone: true
})
export class UnderLineDirective {
@Input() effect:string = "";
  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onmouserenter(){
    this.effect === 'underline' ? this.el.nativeElement.style.textDecoration = 'underline' :
                                  this.el.nativeElement.style.fontWeight = '800';
    // console.log('mouse enter')
  }
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = '400';
  }
  
}