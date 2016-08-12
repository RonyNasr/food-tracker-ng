import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  styles:[`
    .meal-form{
      margin-left: 200px;
    }
    .bottom{
      text-align:center;
      padding: 5px 0;
      margin-bottom: 10px;
    }
  `],
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <div class="row">
        <h4>Create Meal:</h4>
        <input placeholder="Name" class="col-sm-4 input-lg" #newName>
        <input placeholder="Calories" class="col-sm-4 input-lg" #newCalories>
        <br>
        <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      </div>
      <div class="row " >
        <div class="col-sm-8 bottom">
        <button (click)="addMeal(newName, newDescription, newCalories)" class="btn btn-primary">Add Meal</button>
        </div>
      </div>
    </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement){
    this.onSubmitNewMeal.emit([name.value, description.value, parseInt(calories.value)]);
    name.value = "";
    description.value = "";
    calories.value = "";
  }
}
