import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientService } from 'src/app/shared/ingredients.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
    @Output() setNewItem = new EventEmitter<Ingredient>();
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private ingredientService: IngredientService) {}

    onAddItem() {
        this.ingredientService.addIngredient(
            new Ingredient(
                this.nameInputRef.nativeElement.value,
                this.amountInputRef.nativeElement.value
            )
        );
    }
}
