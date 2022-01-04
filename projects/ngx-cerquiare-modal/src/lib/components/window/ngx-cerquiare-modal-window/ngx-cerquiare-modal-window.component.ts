import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { INgxCerquiareModalWindowProperties } from '../../../interfaces/INgxCerquiareModalWindowProperties';
import { NgxCerquiareModalService } from '../../../ngx-cerquiare-modal.service';

@Component({
  selector: 'ngx-cerquiare-modal-window',
  templateUrl: './ngx-cerquiare-modal-window.component.html',
  styleUrls: ['./ngx-cerquiare-modal-window.component.scss']
})
export class NgxCerquiareModalWindowComponent implements OnInit{

    id!:string
    depth!:number
    properties!:INgxCerquiareModalWindowProperties

    attr_shrink:number = 0
    is_closed:boolean = false

    // Events
    @Output() closed:EventEmitter<any> = new EventEmitter()

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
