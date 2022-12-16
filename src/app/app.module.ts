import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetItemComponent } from './budget-list/budget-item/budget-item.component';
import {FormsModule} from "@angular/forms";
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetListComponent,
    BudgetItemComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
