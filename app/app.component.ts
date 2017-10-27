import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
        <div class="col s12 m7">
            <div *ngFor="let currentAnimal of animals" 
              class="card animal">
                <div class="card-image">
                  <img src="#" />
                  <h5>Name: {{currentAnimal.name}}</h5>
                  <span class="card-title">Species: {{currentAnimal.species}}</span>
                </div>
                <div class="card-content">
                  <div class="row">
                    <div class="col s6">
                      <p>age: {{currentAnimal.age}}</p>
                      <p>diet: {{currentAnimal.diet}}</p>
                      <p>likes: {{currentAnimal.likes}}</p>
                    </div>
                    <div class="col s6">
                      <p>caretaker: {{currentAnimal.caretakers}}</p>
                      <p>gender: {{currentAnimal.gender}}</p>
                      <p>dislikes: {{currentAnimal.dislikes}}</p>
                    </div>
                  </div>
                </div>
                <div class="card-action">
                <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises")
  ]
}

export class Animal{ 
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public gender: string, public likes: string, public dislikes: string){}
}
