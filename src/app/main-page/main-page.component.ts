import { Component } from '@angular/core';
import {BudgetItem} from "../shared/models/budget-item";
import {UpdateEvent} from "../budget-list/budget-list.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice( index, 1)
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;

  }

}

