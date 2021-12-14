import { createContentChild } from '@angular/compiler/src/core';
import { ContentChild, ElementRef } from '@angular/core';
import { AfterContentChecked, 
         AfterContentInit, 
         AfterViewChecked, 
         AfterViewInit, 
         Component, 
         DoCheck, 
         Input, 
         OnChanges, 
         OnDestroy, 
         OnInit, 
         SimpleChanges, 
         ViewChild, 
         ViewEncapsulation 
        } 
         from "@angular/core";

@Component({
    selector:'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls:['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Por defecto
    // encapsulation: ViewEncapsulation.ShadowDom
    // encapsulation: ViewEncapsulation.None 
    //Hace los css globales. Elimina la especificidad de las clases creadas por cada componente de Angular
    //MIRAR https://medium.com/@teffcode/c%C3%B3mo-encapsular-nuestros-estilos-de-css-en-angular-bc486be3005f
})

export class ServerComponent implements 
                                OnInit, 
                                OnChanges, 
                                DoCheck, 
                                AfterContentInit,
                                AfterContentChecked,
                                AfterViewInit,
                                AfterViewChecked,
                                OnDestroy {
    @Input('srvElement') element: {type:string, name:string, content:string};
    //Se puede usar un alias, que va entre los paréntesis del @Input()
    @Input() name: string;
    @ViewChild('heading',{static:true}) header: ElementRef;
    @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
    constructor() {
        console.log('Constructor called!');
        
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called!');
        console.log(changes);
    }
    ngOnInit() {
        //Se lanza cada vez que se lanza el constructor
        console.log('ngOnInit called!');
        console.log('Text Content: '+this.header.nativeElement.textContent);
        console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
    }
    ngDoCheck(){
        console.log('ngDoCheck called!');
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit called!');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called!');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit called!');
        console.log('Text Content: '+this.header.nativeElement.textContent);
        console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called!');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy called!');
    }
}