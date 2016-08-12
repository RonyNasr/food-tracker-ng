import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [ MealListComponent ],
  template: `
    <div class="container">
      <h1>Meals Tracker</h1>
      <meal-list
        [mealList] = "meals"
        (onMealSelect)="mealIsSelected($event)"
      >
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("pizza","a flat Dough filled with fatty stuff",3000,0),
      new Meal("Hamburger","a sandwich filled with meat, cheese, bacon and mayonnaise", 1600, 1),
      new Meal("Quinoa Salad", "a light salad fille with proteins and vitamins ", 120, 2),
      new Meal("Oat Meal", 'a light meal full of fibers and nutrients',130, 3)
    ];
  }
  mealIsSelected(clickedMeal: Meal): void {

  }
}