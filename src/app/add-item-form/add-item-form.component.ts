import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BudgetItem} from "../shared/models/budget-item";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item!: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()

  isNewItem: boolean = false;

  ngOnInit() {
    // this.item ? this.isNewItem = false : {this.isNewItem = true; };
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', NaN);
    }
  }

  onSubmit(itemForm: NgForm) {
    this.formSubmit.emit(itemForm.value);
    itemForm.reset();
  }
}
