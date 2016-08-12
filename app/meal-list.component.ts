import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [ CaloriesPipe ],
  directives: [
    MealComponent,
    EditMealComponent,
    NewMealComponent
  ],
  template: `
    <select (change)="onFilterChange($event.target.value)">
      <option value="all" selected="selected">Show All Meals</option>
      <option value="healthy">Healthy Meals</option>
      <option value="unhealthy">Unhealthy Meals</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <edit-meal
      *ngIf="selectedMeal"
      [meal]="selectedMeal">
    </edit-meal>
    <new-meal
      (onSubmitNewMeal)="createMeal($event)"
    > </new-meal>
  `
})
export class MealListComponent{
  public mealList: Meal[];
  public selectedMeal : Meal;
  public onMealSelect: EventEmitter<Meal>;
  public filterCalories: string = "all";

  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([name, description, calories]: any[]){
    this.mealList.push(
      new Meal(name, description, parseInt(calories), this.mealList.length)
    );
  }
  onFilterChange(filterOption) {
    this.filterCalories = filterOption;
  }

}
