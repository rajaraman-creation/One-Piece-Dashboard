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
import { SidebarModule } from 'primeng/sidebar';
import { ClientComponent } from "./overlay/client/client.component";
import { BookAppointmentComponent } from "./overlay/book-appointment/book-appointment.component";
import { QuickCheckOutComponent } from "./overlay/quick-check-out/quick-check-out.component";
import { MessageHubComponent } from "./overlay/message-hub/message-hub.component";


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
    SpeedDialModule,
    SidebarModule,
    ClientComponent,
    BookAppointmentComponent,
    QuickCheckOutComponent,
    MessageHubComponent
],
  exports:[AppLayoutComponent,AppSubmenuComponent]
})
export class LayoutModule { }
