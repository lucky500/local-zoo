import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <a class="waves-effect waves-light btn">
          Younger Animals
        </a>
        <div class="col s12">
          <div class="row">
            <div *ngFor="let currentAnimal of animals" class="col s12 m2 l6">
              <div class="card animal">
                  <div class="card-image">
                    <img src={{currentAnimal.img}} >
                    <h5>Name: {{currentAnimal.name}}</h5>
                    <span class="card-title">Species: {{currentAnimal.species}}</span>
                  </div>
                  <div class="card-content">
                    <div class="row">
                      <div class="col s12 m6">
                        <p>age: {{currentAnimal.age}}</p>
                        <p>diet: {{currentAnimal.diet}}</p>
                        <p>likes: {{currentAnimal.likes}}</p>
                      </div>
                      <div class="col s12 m6">
                        <p>caretaker: {{currentAnimal.caretakers}}</p>
                        <p>gender: {{currentAnimal.gender}}</p>
                        <p>dislikes: {{currentAnimal.dislikes}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-action">
                    <a class="waves-effect waves-light btn">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      Edit
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="row edit-form">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{selectedAnimal.name}}</span>
          <h5>Edit Animal Name:</h5>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="selectedAnimal.name">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "../resources/images/arctic_fox.jpg"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based", "../resources/images/ocelot.jpg")
  ];

  selectedAnimal: Animal = this.animals[0];

  editTask(){

  }

  youngerThanTwo(listAnimal: Animal){

  }
}

export class Animal{ 
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public gender: string, public likes: string, public dislikes: string, public img: string){}
}
