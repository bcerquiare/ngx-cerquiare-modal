import { INgxCerquiareModalWindowComponent } from "../interfaces/INgxCerquiareModalWindowComponent";
import { NgxCerquiareModalService } from "../ngx-cerquiare-modal.service";

interface ICerquiareGlobal{
    modal:NgxCerquiareModalService
}

export const cerquiareGlobal:ICerquiareGlobal = {
    'modal': {} as NgxCerquiareModalService
}

export function cerquiare() : ICerquiareGlobal {
    return cerquiareGlobal
}
