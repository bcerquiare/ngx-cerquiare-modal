import { Injectable, Type } from '@angular/core';
import { NgxCerquiareModalConfig } from './classes/NgxCerquiareModalConfig';
import { NgxCerquiareModalBackdropService } from './services/backdrop/ngx-cerquiare-modal-backdrop.service';
import { INgxCerquiareModalWindowComponent } from './interfaces/INgxCerquiareModalWindowComponent'
import { NgxCerquiareModalIntent } from './classes/NgxCerquiareModalIntent';

@Injectable({
    providedIn: 'root',
})
export class NgxCerquiareModalService{

    constructor(
        public config: NgxCerquiareModalConfig,
        public backdrop: NgxCerquiareModalBackdropService
    ) {
    }

    teste() {
        console.log('oi', this.config)
    }

    append<T extends INgxCerquiareModalWindowComponent, C = any>(component:Type<T>, ...args:Array<any>){
        return this.backdrop.append<T, C>(component, ...args)
    }

    window(id:string){
        return this.windows.find(x => x.id === id)
    }

    //
    //
    //

    get windows() : Array<any>{
        return this.backdrop.windows
    }

}
