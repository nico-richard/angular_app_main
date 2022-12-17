import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe(
            0,
            'Recipe 1',
            'make recipe 1',
            `https://images.freeimages.com/images/large-previews/a4b/chicken-and-ricenoodles-salad-1639713.jpg`
        ),
        new Recipe(
            1,
            'Recipe 2',
            'make recipe 2',
            `https://images.freeimages.com/images/large-previews/58c/pancake-with-bananas-and-syrup-1641696.jpg`
        ),
        new Recipe(
            2,
            'Recipe 3',
            'make recipe 3',
            `https://images.freeimages.com/images/large-previews/49a/vegan-meatballs-with-gravy-gluten-free-recipe1-1639522.jpg`
        ),
    ];
}
