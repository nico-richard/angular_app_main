import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
    recipeSelected: Recipe;
    id: number;

    constructor(
        private recipeService: RecipeService,
        private shoppingListService: ShoppingListService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.recipeSelected = this.recipeService.getRecipe(this.id);
        });
    }

    onDetailsClose() {
        this.recipeSelected = null;
    }

    addToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient) =>
            this.shoppingListService.addIngredient(ingredient)
        );
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}
