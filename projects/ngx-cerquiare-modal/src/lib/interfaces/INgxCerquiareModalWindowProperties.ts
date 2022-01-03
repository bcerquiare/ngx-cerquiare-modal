import { ENgxCerquiareModalWindowPosition } from "../enum/ENgxCerquiareModalWindowPosition";
import { ENgxCerquiareModalWindowType } from "../enum/ENgxCerquiareModalWindowType";

export interface INgxCerquiareModalWindowProperties{
    type:ENgxCerquiareModalWindowType
    position:ENgxCerquiareModalWindowPosition
    minimizable:boolean
    closeable:boolean
    closeOnClickOutside:boolean
}
