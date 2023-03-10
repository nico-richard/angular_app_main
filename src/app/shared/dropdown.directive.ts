import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appDropDown]',
})
export class DropDownDirective implements OnInit {
    deletionTask: NodeJS.Timeout;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.renderer.setStyle(
            this.elementRef.nativeElement.children[1],
            'display',
            'none'
        );
    }

    @HostListener('mouseenter') mouseEnter(event: Event) {
        clearTimeout(this.deletionTask);
        this.renderer.setStyle(
            this.elementRef.nativeElement.children[1],
            'display',
            'block'
        );
    }
    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.deletionTask = setTimeout(() => {
            this.renderer.setStyle(
                this.elementRef.nativeElement.children[1],
                'display',
                'none'
            );
        }, 500);
    }
}
