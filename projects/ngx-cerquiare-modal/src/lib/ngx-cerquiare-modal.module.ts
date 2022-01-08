import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCerquiareModalBackdropComponent } from './components/ngx-cerquiare-modal-backdrop/ngx-cerquiare-modal-backdrop.component';
import { INgxCerquiareModalConfig } from './interfaces/INgxCerquiareModalConfig';
import { NgxCerquiareModalConfig } from './classes/NgxCerquiareModalConfig';
import { NgxCerquiareModalWindowComponent } from './components/window/ngx-cerquiare-modal-window/ngx-cerquiare-modal-window.component';
import { CommonModule } from '@angular/common';
import { NgxCerquiareModalHeaderComponent } from './components/window/ngx-cerquiare-modal-header/ngx-cerquiare-modal-header.component';
import { NgxCerquiareModalBodyComponent } from './components/window/ngx-cerquiare-modal-body/ngx-cerquiare-modal-body.component';
import { NgxCerquiareModalFooterComponent } from './components/window/ngx-cerquiare-modal-footer/ngx-cerquiare-modal-footer.component';

@NgModule({
    declarations: [
        NgxCerquiareModalBackdropComponent,
        NgxCerquiareModalWindowComponent,
        NgxCerquiareModalHeaderComponent,
        NgxCerquiareModalBodyComponent,
        NgxCerquiareModalFooterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NgxCerquiareModalBackdropComponent,
        NgxCerquiareModalWindowComponent,
        NgxCerquiareModalHeaderComponent,
        NgxCerquiareModalBodyComponent,
        NgxCerquiareModalFooterComponent,
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
