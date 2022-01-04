import { Type } from "@angular/core";
import { Observable } from "rxjs";
import { INgxCerquiareModalWindowComponent } from "../interfaces/INgxCerquiareModalWindowComponent";

/**
 * @deprecated do not use
 */
export class NgxCerquiareModalIntent<T extends INgxCerquiareModalWindowComponent> extends Observable<T>{

    constructor(
        public component:Type<T>,
        public args?:Array<any>
    ){
        super()
    }

    construct(args:Array<any>) : this {
        this.args = args
        return this
    }

}
