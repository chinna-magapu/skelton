import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ AppLayoutComponent, UserLayoutComponent, HeaderComponent, FooterComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ AppLayoutComponent, UserLayoutComponent, HeaderComponent, FooterComponent ]
})
export class LayoutModule { }
