import { Component } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})

export class AppComponent {
  //selectedAnimal: Animal  = this.animals[0];
  selectedAnimal = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  youngerThanTwo(listAnimal: Animal){

  }
}
