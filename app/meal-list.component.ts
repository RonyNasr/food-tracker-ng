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
  styles: [`
      .toggle-new-meal{
        margin-top: 20px;
        color: darkgrey;
      }
      .toggle-new-meal:hover{
        color: blue;
      }
    `],
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
    <div>
    <h3 class="toggle-new-meal" (click)="toggleNewMeal(true)">Add a meal</h3>
    <new-meal
      *ngIf="isNewMealVisible"
      (onSubmitNewMeal)="createMeal($event)"
    > </new-meal>

  `
})
export class MealListComponent{
  public mealList: Meal[];
  public selectedMeal : Meal;
  public isSelectedMeal = false;
  public onMealSelect: EventEmitter<Meal>;
  public filterCalories: string = "all";
  public isNewMealVisible = false;

  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    // this.toggleEditMeal(clickedMeal);
  }
  createMeal([name, description, calories]: any[]){
    this.mealList.push(
      new Meal(name, description, parseInt(calories), this.mealList.length)
    );
    this.toggleNewMeal(false);
  }
  onFilterChange(filterOption) {
    this.filterCalories = filterOption;
  }
  toggleNewMeal(value: boolean): void{
    this.isNewMealVisible = value;
  }
  // toggleEditMeal(clickedMeal){
  //     console.log(clickedMeal);
  //     //this.isSelectedMeal = !clickedMeal.class.selected
  // }
}
