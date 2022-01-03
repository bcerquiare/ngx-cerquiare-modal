import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { INgxCerquiareModalConfig } from '../../interfaces/INgxCerquiareModalConfig';
import { NgxCerquiareModalService } from '../../ngx-cerquiare-modal.service';

@Component({
    selector: 'ngx-cerquiare-modal-backdrop',
    templateUrl: './ngx-cerquiare-modal-backdrop.component.html',
    styleUrls: ['./ngx-cerquiare-modal-backdrop.component.scss'],
})
export class NgxCerquiareModalBackdropComponent implements OnInit {

    constructor(
        public viewContainerRef: ViewContainerRef,
        public modalService:NgxCerquiareModalService,
    ) {

    }

    ngOnInit(): void {

    }

    get config() : INgxCerquiareModalConfig{
        return this.modalService.config
    }

}
