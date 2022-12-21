export class Recipe {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imagePath: string
    ) {}
}

export const recipes: Recipe[] = [
    new Recipe(
        1,
        'Recipe 1',
        'make recipe 1',
        `https://images.freeimages.com/images/large-previews/a4b/chicken-and-ricenoodles-salad-1639713.jpg`
    ),
    new Recipe(
        2,
        'Recipe 2',
        'make recipe 2',
        `https://images.freeimages.com/images/large-previews/58c/pancake-with-bananas-and-syrup-1641696.jpg`
    ),
    new Recipe(
        3,
        'Recipe 3',
        'make recipe 3',
        `https://images.freeimages.com/images/large-previews/49a/vegan-meatballs-with-gravy-gluten-free-recipe1-1639522.jpg`
    ),
];
