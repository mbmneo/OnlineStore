import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Pasta recipes' , 'Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. Find the perfect pasta recipe for midweek meals as well as easy pasta dishes you can rustle up using your storecupboard.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg'),
    new Recipe('Chicken pasta bake','Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad ','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/01/chicken_pasta_bake.jpg?itok=3u5ZUexj'),
    new Recipe('Classic lasagne','Prepare this easy lasagne ahead of time and save in the freezer, uncooked, for when you need it during a busy week. Then just bake for an extra 45 mins','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273579_7.jpg?itok=SD4k34fj'),
    new Recipe('','',''),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
