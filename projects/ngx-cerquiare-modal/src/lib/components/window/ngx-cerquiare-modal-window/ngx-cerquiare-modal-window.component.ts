import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ENgxCerquiareModalWindowPosition } from '../../../enum/ENgxCerquiareModalWindowPosition';
import { ENgxCerquiareModalWindowType } from '../../../enum/ENgxCerquiareModalWindowType';
import { INgxCerquiareModalWindowProperties } from '../../../interfaces/INgxCerquiareModalWindowProperties';
import { NgxCerquiareModalService } from '../../../ngx-cerquiare-modal.service';
import { TNgxCerquiareModalWindowPosition } from '../../../types/TNgxCerquiareModalWindowPosition';
import { TNgxCerquiareModalWindowSize } from '../../../types/TNgxCerquiareModalWindowSize';
import { TNgxCerquiareModalWindowType } from '../../../types/TNgxCerquiareModalWindowType';
import { NgxCerquiareModalBodyComponent } from '../ngx-cerquiare-modal-body/ngx-cerquiare-modal-body.component';
import { NgxCerquiareModalFooterComponent } from '../ngx-cerquiare-modal-footer/ngx-cerquiare-modal-footer.component';
import { NgxCerquiareModalHeaderComponent } from '../ngx-cerquiare-modal-header/ngx-cerquiare-modal-header.component';

@Component({
  selector: 'ngx-cerquiare-modal-window',
  templateUrl: './ngx-cerquiare-modal-window.component.html',
  styleUrls: ['./ngx-cerquiare-modal-window.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxCerquiareModalWindowComponent implements OnInit{

    id!:string
    depth!:number
    properties!:INgxCerquiareModalWindowProperties

    attr_shrink:number = 0
    is_closed:boolean = false

    // Inputs
    @Input('theme') theme:string = 'light'
    @Input('type') type:TNgxCerquiareModalWindowType = 'modal'
    @Input('position') position:TNgxCerquiareModalWindowPosition = 'right'
    @Input('size') size:TNgxCerquiareModalWindowSize = 'medium'

    // Events
    @Output() closed:EventEmitter<any> = new EventEmitter()

    // Childs
    @ViewChild(NgxCerquiareModalHeaderComponent, {static:true}) header!:NgxCerquiareModalHeaderComponent
    @ViewChild(NgxCerquiareModalBodyComponent, {static:true}) body!:NgxCerquiareModalBodyComponent
    @ViewChild(NgxCerquiareModalFooterComponent, {static:true}) footer!:NgxCerquiareModalFooterComponent



    constructor(
        public modalService:NgxCerquiareModalService
    ) {

    }

    ngOnInit(): void {

    }

    shrink(){
        this.attr_shrink = Math.abs(this.depth - this.modalService.backdrop.getMaxDepth())
    }

    close(...args:any){
        this.is_closed = true
        this.closed.emit(...args)
    }

    performeClose(){

        return new Observable(o => {

            setTimeout(() => {
                o.next()
                o.complete()
            }, 100)

        })

    }

    //
    //
    //

    get zIndex(){
        return this.modalService.config.backdrop.zIndex
    }

}
