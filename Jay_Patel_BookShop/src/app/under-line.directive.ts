import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderLine]',
  standalone: true
})
export class UnderLineDirective {
  @Input() Effect = '';
  constructor(private el:ElementRef) { }
    @HostListener('mouseenter') onmouseenter(){
      this.addLine('underline');
    }
    @HostListener('mouseleave') onmouseleave(){
      this.removeLine();
    }
    addLine(effect: string){
      effect === "underline" ? this.el.nativeElement.style.textDecoration = 'underline' : this.el.nativeElement.style.fontWeight = "700";
    }
    removeLine(){
      this.el.nativeElement.style.textDecoration = 'none'; 
      this.el.nativeElement.style.textDecoration = '400';
    }

}
