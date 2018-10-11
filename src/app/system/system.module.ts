import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BillService } from './shared/services/bill.service';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SidebarComponent,
     HeaderComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent
  ],
  providers: [BillService]
})
export class SystemModule { }
