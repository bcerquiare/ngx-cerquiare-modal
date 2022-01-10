> Simple yet powerful injected modal for Angular that does not sit on DOM. Get full control on your component inside a beautifull modal.

## Demonstration

## Installation
```
npm install --save ngx-cerquiare-modal
```

## How it works
NgxCerquiareModalService injects your component on DOM and give you full control for manipulation.

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

2. Create a custom component where .ts file extends `NgxCerquiareModalComponentBase` or use `INgxCerquiareModalWindowComponent` interface as base

3. Your component template should be encapsulated with `ngx-cerquiare-modal-window` and have `ngx-cerquiare-modal-header` `ngx-cerquiare-modal-body` and `ngx-cerquiare-modal-footer` as child components for the presentation:

```html
<ngx-cerquiare-modal-window>

    <ngx-cerquiare-modal-header>

        <div class="modal-header-content">
            Yout component title
        </div>
        <div class="modal-header-buttons">

            <!-- close button -->
            <div class="button">
                <button class="ngx-cerquiare-close-button" type="button" (click)="modal.close()">
                    <span aria-hidden="true">&#x2715;</span>
                </button>
            </div>

        </div>

    </ngx-cerquiare-modal-header>

    <ngx-cerquiare-modal-body>
        Your body content here
    </ngx-cerquiare-modal-body>

    <ngx-cerquiare-modal-footer>
        Your footer
    </ngx-cerquiare-modal-footer>

</ngx-cerquiare-modal-window>
```

3. Now your modal component is done. To call him inject the `NgxCerquiareModalService` where you want to open the dialog. Call `modalService.append<YourComponent>(YourComponentType).subscribe(instance => { /*... manipulate your component instance here ...*/ })`

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

        this.modal.append<TestComponent>(TestComponent, 'argument1', 'argument2').subscribe(instance => {
            
            instance.callMyComponentFunctionHere()

            instance.modal.closed.subscribe((data:any) => {
                console.log('component closed', data)
            })

        })

    }

}
```

### Properties
- position: center | right
- type: modal | dialog
- theme: light | dark | anyone you created

### Events
- closed: fired when you modal is closed

## Styles
The base is:

```scss
.ngx-cerquiare-window[theme='your-theme-name']{

    .ngx-cerquiare-window-header{

        .modal-header-content{
            
        }
        
        .modal-header-buttons{
            
        }
        
    }

    .ngx-cerquiare-window-body{
        
    }

    .ngx-cerquiare-window-footer{
        
    }

}
```

## License
Licensed under MIT
