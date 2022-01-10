import { Injectable, Type } from '@angular/core';
import { NgxCerquiareModalConfig } from './classes/NgxCerquiareModalConfig';
import { NgxCerquiareModalBackdropService } from './services/backdrop/ngx-cerquiare-modal-backdrop.service';
import { INgxCerquiareModalWindowComponent } from './interfaces/INgxCerquiareModalWindowComponent'
import { cerquiareGlobal } from './script/cerquiare';

@Injectable({
    providedIn: 'root',
})
export class NgxCerquiareModalService{

    constructor(
        public config: NgxCerquiareModalConfig,
        public backdrop: NgxCerquiareModalBackdropService
    ) {
        // register service in cerquiareGlobal var
        cerquiareGlobal.modal = this
    }

    append<T extends INgxCerquiareModalWindowComponent, C = any>(component:Type<T>, ...args:Array<any>){
        return this.backdrop.append<T, C>(component, ...args)
    }

    modal(id:string){
        return this.modals.find(x => x.modal.id === id)
    }

    //
    //
    //

    get modals() : Array<INgxCerquiareModalWindowComponent>{
        return this.backdrop.windows.map(c => c.instance)
    }

}
