import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [ MealListComponent ],
  styles: [`
    .jumbotron{
      padding-top: 130px;
      text-align: center;
      color: white;
      height: 400px;
      background: url("http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg") no-repeat center center;
    }
    .jumbotron h1{
      font-weight: bold;
      font-family: 'Bitter', serif;
    }
    .container{
      padding: 30px 0 30px 50px;
      background: white;
      min-height: 820px;
      margin-bottom:100px;
    }
    `],
  template: `
    <div class= "jumbotron">
      <h1>Meals Tracker</h1>
    </div>
    <div class="container">
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
