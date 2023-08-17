import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.maxpixel.net%2Fstatic%2Fphoto%2F1x%2FSpoon-Recipe-Card-Label-Icon-Food-Symbol-Recipes-575434.png&tbnid=DDVWntkJP0C94M&vet=12ahUKEwj4uovciOSAAxXT2zgGHdHPAPkQMygZegUIARDFAQ..i&imgrefurl=https%3A%2F%2Fwww.maxpixel.net%2FSpoon-Recipe-Card-Label-Icon-Food-Symbol-Recipes-575434&docid=H7aF0uzCyCm_jM&w=843&h=720&q=recipe%20image&hl=en&ved=2ahUKEwj4uovciOSAAxXT2zgGHdHPAPkQMygZegUIARDFAQ'
    ),
  ];
}
