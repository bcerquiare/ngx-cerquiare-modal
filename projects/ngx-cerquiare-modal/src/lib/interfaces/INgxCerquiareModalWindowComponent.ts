import { NgxCerquiareModalWindowComponent } from "./../components/window/ngx-cerquiare-modal-window/ngx-cerquiare-modal-window.component";

export interface INgxCerquiareModalWindowComponent{
    modal:NgxCerquiareModalWindowComponent
    ngOnModalInit(...args:any):void
    ngOnModalDestroy():void
}
