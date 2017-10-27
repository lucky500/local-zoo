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

  masterAnimalList: Animal[] = [
    new Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "../resources/images/arctic_fox.jpg"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based", "../resources/images/ocelot.jpg"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises", "../resources/images/deer.jpg")
  ];

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  youngerThanTwo(listAnimal: Animal){

  }
}
