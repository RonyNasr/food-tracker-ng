import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template:`
  <div class="row">
    <div class="col-md-4">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="meal.name" class="input-lg meal-form"/>
    </div>
    <div class="col-md-4">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="meal.description" class="input-lg meal-form"/>
    </div>
    <div class="col-md-4">
      <h3>Edit Calories: </h3>
      <input [(ngModel)]="meal.calories" type="number" min="0" class="input-lg meal-form"/>
    </div>
  </div>
  `
})
export class EditMealComponent{
  public meal:Meal;
}
