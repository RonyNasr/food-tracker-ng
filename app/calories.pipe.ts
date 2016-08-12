import { Pipe, PipeTransform } from  'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform{
  transform(input: Meal[], args) {
   let healthyFilter: string = args[0];
    if(healthyFilter === "healthy"){
      return input.filter((meal) => {
        return meal.calories <= 500;
      })
    }else if(healthyFilter === "unhealthy"){
      return input.filter((meal) => {
        return meal.calories > 500;
      })
    }else{
      return input;
    }
  }

}
