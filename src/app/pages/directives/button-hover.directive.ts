import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[soaButtonHover]'
})
export class ButtonHoverDirective {

  constructor(private ele: ElementRef) { }

  @Input('soaButtonHover') hovercolor: string;

  @HostListener('mouseenter')
  onmouseenter(){
    this.hoverStyle(this.hovercolor || 'red');
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.hoverStyle(null);
  }

  private hoverStyle(color: string){
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
