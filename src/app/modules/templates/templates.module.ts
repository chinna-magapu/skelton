import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateRoutingModule } from './template-routing.module';
import { LayoutModule } from 'src/app/layouts/layout.module';

@NgModule({
  declarations: [TemplatesComponent ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    LayoutModule
  ]
})
export class TemplatesModule { }
