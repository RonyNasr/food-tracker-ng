import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h4 (click)="mealClicked()" >{{ meal.name }}</h4>
    <div *ngIf="mealSelected">
      <h5>Description: {{ meal.description }}</h5>
      <h5>Calories: {{ meal.calories }}</h5>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public mealSelected: boolean = false;
  mealClicked(): void {
    this.mealSelected = !this.mealSelected;
  }
}
