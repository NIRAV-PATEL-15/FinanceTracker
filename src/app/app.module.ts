import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IncomeExpenseComponent } from './components/dashboard/income-expense/income-expense.component';
import { CardsComponent } from './components/dashboard/cards/cards.component';
import { CardItemComponent } from './components/dashboard/cards/card-item/card-item.component';
import { TitleDatepickerComponent } from './components/dashboard/title-datepicker/title-datepicker.component';
import { ExpensesComponent } from './components/dashboard/expenses/expenses.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { ProfileComponent } from './components/sidebar/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { AddTransactionComponent } from './components/transactions/add-transaction/add-transaction.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { RecentTransactionsComponent } from './components/dashboard/recent-transactions/recent-transactions.component';
import { RouterOutlet } from '@angular/router';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionsComponent,
    SidebarComponent,
    IncomeExpenseComponent,
    CardsComponent,
    CardItemComponent,
    TitleDatepickerComponent,
    ExpensesComponent,
    MenuComponent,
    ProfileComponent,
    TransactionListComponent,
    AddTransactionComponent,
    RecentTransactionsComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    DataTablesModule, NgChartsModule,ReactiveFormsModule,RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
