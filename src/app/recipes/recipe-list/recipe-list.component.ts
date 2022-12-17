import { Component } from '@angular/core';
import { Recipe } from 'src/types';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        {
            title: 'Recipe 1',
            content: 'make recipe 1',
        },
        {
            title: 'Recipe 2',
            content: 'make recipe 2',
        },
        {
            title: 'Recipe 3',
            content: 'make recipe 3',
        },
    ];
}
