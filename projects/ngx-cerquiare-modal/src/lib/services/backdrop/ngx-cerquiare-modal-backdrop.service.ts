import { ComponentRef, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxCerquiareModalIntent } from '../../classes/NgxCerquiareModalIntent';
import { NgxCerquiareModalBackdropComponent } from '../../components/ngx-cerquiare-modal-backdrop/ngx-cerquiare-modal-backdrop.component';
import { INgxCerquiareModalWindowComponent } from '../../interfaces/INgxCerquiareModalWindowComponent';
import { DomService } from '../dom/dom.service';

@Injectable({
    providedIn: 'root'
})
export class NgxCerquiareModalBackdropService {

    protected backdrop?: ComponentRef<NgxCerquiareModalBackdropComponent>
    windows: Array<ComponentRef<INgxCerquiareModalWindowComponent>> = []

    constructor(
        public dom: DomService
    ) {

    }

    protected createWindow<T extends INgxCerquiareModalWindowComponent>(component:Type<T>, ...args:Array<any>): Observable<T> {

        return new Observable(o => {

            this.createBackdrop()

            this.dom.appendComponentToBody(component).subscribe(c => {

                c.instance.modal.id = 'mcwdw_' + btoa(Math.random().toString()).slice(0, 16)
                c.instance.modal.depth = this.getMaxDepth() + 1
                c.instance?.ngOnModalInit(...args)
                c.instance.modal.closed.subscribe(() => {

                    this.onWindowClosed(c)

                    c.instance.modal.performeClose().subscribe(() => {

                        c.instance?.ngOnModalDestroy()
                        this.dom.removeComponentFromBody(c)
                        this.windows.splice(this.windows.findIndex(f => f === c), 1)

                    })

                })

                this.windows.push(c)
                this.onNewWindowCreated(c)

                o.next(c.instance)
                o.complete()

            })

        })

    }


    // Cria o pano de fundo se necessário
    protected createBackdrop() {

        if (this.backdrop) {
            return
        }

        this.dom.appendComponentToBody<NgxCerquiareModalBackdropComponent>(NgxCerquiareModalBackdropComponent).subscribe(c => {
            this.backdrop = c
        })

    }

    // Remove o pano de fundo
    protected removeBackdrop() {

        if (this.backdrop) {
            this.dom.removeComponentFromBody(this.backdrop)
            delete this.backdrop
            this.backdrop = undefined
        }

    }

    // Quando uma nova modal é criada
    protected onNewWindowCreated(component: ComponentRef<INgxCerquiareModalWindowComponent>) {

        this.windows.forEach(c => {

            if (c == component) {
                return
            }

            c.instance.modal.shrink()

        })

    }

    // Quando uma modal é fechada
    protected onWindowClosed(component: ComponentRef<INgxCerquiareModalWindowComponent>) {

        this.windows.forEach(c => {

            if (c == component) {
                return
            }

            c.instance.modal.shrink()

        })

        if (this.windows.filter(x => !x.instance.modal.is_closed).length === 0) {
            this.removeBackdrop()
        }

    }

    //
    //
    //

    append<T extends INgxCerquiareModalWindowComponent, C = any>(window: Type<T>, ...args:Array<any>): Observable<T> {
        return this.createWindow<T>(window, ...args)
    }

    getMaxDepth(): number {
        const windows = this.windows.filter(x => !x.instance.modal.is_closed)
        return windows.length === 0 ? -1 : windows.reduce((prev, curr) => (prev.instance.modal.depth > curr.instance.modal.depth ? prev : curr)).instance.modal.depth
    }

    getWindowsWithDepthGreatherThan(depth: number): Array<any> {
        return this.windows.filter(x => x.instance.modal.depth > depth)
    }

    focus(window: any) {
        /*const reorders = this.getWindowsWithDepthGreatherThan(window.depth)
        window.instance.depth = this.getMaxDepth()
        reorders.forEach(x => x.depth = x.depth - 1)*/
    }

    //
    //
    //

    get is_visible(): boolean {
        return this.windows.length === 0 ? false : true
    }

}
