import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetItem} from "../../shared/models/budget-item";

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent {


  @Input() item!: BudgetItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();


  deleteItemBtn() {
    this.deleteItem.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
