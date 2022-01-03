import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCerquiareModalBackdropComponent } from './components/ngx-cerquiare-modal-backdrop/ngx-cerquiare-modal-backdrop.component';
import { INgxCerquiareModalConfig } from './interfaces/INgxCerquiareModalConfig';
import { NgxCerquiareModalConfig } from './classes/NgxCerquiareModalConfig';
import { NgxCerquiareModalWindowComponent } from './components/window/ngx-cerquiare-modal-window/ngx-cerquiare-modal-window.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NgxCerquiareModalBackdropComponent,
        NgxCerquiareModalWindowComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NgxCerquiareModalBackdropComponent,
        NgxCerquiareModalWindowComponent,
    ],
})
export class NgxCerquiareModalModule {

    static forRoot(config: INgxCerquiareModalConfig): ModuleWithProviders<NgxCerquiareModalModule> {

        return {
            'ngModule': NgxCerquiareModalModule,
            'providers': [
                {
                    'provide': NgxCerquiareModalConfig, 'useValue': config
                }
            ]
        }
    }

}
