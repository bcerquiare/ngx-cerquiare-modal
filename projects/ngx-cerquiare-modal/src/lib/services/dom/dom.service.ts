import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    Type,
} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DomService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private applicationRef: ApplicationRef,
        private injector: Injector
    ) {}

    appendComponentToBody<T>(component: Type<T>) : Observable<ComponentRef<T>> {

        return new Observable(o => {

            //create a component reference
            const componentRef = this.componentFactoryResolver
                .resolveComponentFactory<T>(component)
                .create(this.injector)

            // attach component to the appRef so that so that it will be dirty checked.
            this.applicationRef.attachView(componentRef.hostView);

            // get DOM element from component
            const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

            document.body.appendChild(domElem);

            o.next(componentRef)
            o.complete()

        })

    }

    removeComponentFromBody(componentRef: ComponentRef<any> ) {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }

}
