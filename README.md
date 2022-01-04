> Simple yet powerful injected modal for Angular that does not sit on DOM. Get full control on your component inside a beautifull modal.

## Demonstration

## Installation
```
npm install --save ngx-cerquiare-modal
```

## How it works
NgxCerquiareModalService injects your component on DOM and give you control of all you needs.

1. Include NgxCerquiareModalModule inside your application module.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgxCerquiareModalModule } from 'ngx-cerquiare-modal';

@NgModule({
    imports: [
        BrowserModule,
        NgxCerquiareModalModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Create a custom component that extends `NgxCerquiareModalComponentBase` or use `INgxCerquiareModalWindowComponent` interface as base

3. Inject the `NgxCerquiareModalService` where you want to open the dialog. Call `service.append<YourComponent>(YourComponentType).subscribe(instance => { ... manipulate your component instance here ... })`

```ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    constructor(
        public modal:NgxCerquiareModalService
    ){

    }

    openModal(){

        this.modal.append<TestComponent>(TesteComponent, 'argument1', 'argument2').subscribe(instance => {
            
            instance.modal.closed.subscribe((data:any) => {
                console.log('component closed', data)
            })

        })
        
    }

}
```

## Styles

## Using

## License
Licensed under MIT
