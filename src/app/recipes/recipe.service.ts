import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            1,
            'Pates au beurre',
            'make recipe 1',
            `https://1.bp.blogspot.com/-nu1uiCBMZY0/X19CXAy90QI/AAAAAAABXcQ/40RTKULpVPEsoiEmzOA-DBjOJS1GP4cGwCLcBGAsYHQ/s660/pates-fraiches-au-beurre.jpg`,
            [
                new Ingredient('pates', 100),
                new Ingredient('beurre', 10),
                new Ingredient('sel', 2),
            ]
        ),
        new Recipe(
            2,
            'Risotto aux poireaux',
            'make recipe 2',
            `https://img.cuisineaz.com/660x660/2018/09/01/i142196-risotto-aux-poireaux-et-lardons.jpeg`,
            [
                new Ingredient('riz', 100),
                new Ingredient('poireaux', 200),
                new Ingredient('crème', 5),
            ]
        ),
        new Recipe(
            3,
            'Mousse au chocolat',
            'make recipe 3',
            `https://static.750g.com/images/1200-630/f1904fd901c5077056f719c51906be87/thinkstockphotos-623897390.jpg`,
            [new Ingredient('oeuf', 3), new Ingredient('chocolat', 100)]
        ),
    ];

    recipeSelected: Recipe;

    getRecipes() {
        return this.recipes.slice();
    }

    selectRecipe(recipe: Recipe) {
        this.recipeSelected = recipe;
    }
}
