import { Observable } from "rxjs";

export interface INgxCerquiareModalConfig{

    backdrop:{
        zIndex:number|(() => Observable<number>)
    }

}
