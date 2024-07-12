import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppSideBarComponent } from './app-side-bar/app-side-bar.component';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { AppSubmenuComponent } from './app-submenu/app-submenu.component';


@NgModule({
  declarations: [ 
    AppTopBarComponent,
    AppLayoutComponent,
    AppSideBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSubmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    MenuModule,
    ButtonModule,
    SpeedDialModule
  ],
  exports:[AppLayoutComponent,AppSubmenuComponent]
})
export class LayoutModule { }
