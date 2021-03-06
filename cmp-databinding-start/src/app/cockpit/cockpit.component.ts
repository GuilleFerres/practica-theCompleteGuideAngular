import { Component, ElementRef, EventEmitter, OnInit, Output,ViewChild } from "@angular/core";

@Component({
    selector:'app-cockpit',
    templateUrl: './cockpit.component.html'
})

export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput', {static:true}) serverContentInput : ElementRef;

    constructor(){

    }
    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value, 
            serverContent: this.serverContentInput.nativeElement.value
        });
      }
      ngOnInit() {
          //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
          
      }
      onAddBlueprint( nameInput: HTMLInputElement ) {
        this.blueprintCreated.emit({
            serverName: nameInput.value, 
            serverContent: this.serverContentInput.nativeElement.value
        });
      }
}