import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../animal.model';

@Component({
    selector: 'app-new',
    moduleId: module.id,
    templateUrl: 'app-new.component.html'
})

export class AppNewComponent{
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, likes: string, dislikes: string, img: string){
        let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes, img);
        this.newAnimalSender.emit(newAnimalToAdd);
    }
}