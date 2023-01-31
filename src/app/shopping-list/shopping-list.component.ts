import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igChangeSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getShoppingList();
        this.igChangeSubscription =
            this.shoppingListService.ingredientsChanged.subscribe(
                (updatedIngredients: Ingredient[]) => {
                    this.ingredients = updatedIngredients;
                }
            );
    }

    ngOnDestroy(): void {
        this.igChangeSubscription.unsubscribe();
    }

    onEditItem(index: number) {
        this.shoppingListService.startedEditing.next(index);
    }
}
