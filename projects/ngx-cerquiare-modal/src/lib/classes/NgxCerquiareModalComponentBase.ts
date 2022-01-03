import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { NgxCerquiareModalWindowComponent } from "../../public-api";
import { INgxCerquiareModalWindowComponent } from "../interfaces/INgxCerquiareModalWindowComponent";
import { INgxCerquiareModalWindowProperties } from "../interfaces/INgxCerquiareModalWindowProperties";

@Component({
    template:''
})
export class NgxCerquiareModalComponentBase implements INgxCerquiareModalWindowComponent{

    id!:string
    depth!:number
    properties!:INgxCerquiareModalWindowProperties

    @ViewChild(NgxCerquiareModalWindowComponent, {static:true}) modal!:NgxCerquiareModalWindowComponent

}
