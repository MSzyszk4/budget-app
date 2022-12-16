import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetItem} from "../shared/models/budget-item";
import {EditItemModalComponent} from "../edit-item-modal/edit-item-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent {



  @Input() budgetItems!: BudgetItem[] ;
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {
  }

  onDeleteBtn(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    // display edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // replace the item with the updated item from the edit form
        // this.budgetItems[this.budgetItems.indexOf(item)] = result;
        this.update.emit({
          old: item,
          new: result
        });

      }
    })

  }
}


export interface UpdateEvent {
  new: BudgetItem,
  old: BudgetItem
}
