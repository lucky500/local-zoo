import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Animal } from '../animal.model';

@Component({
    selector: 'app-list',
    moduleId: module.id,
    templateUrl: 'app-list.component.html'
})

export class AppListComponent {
    @Input() childAnimalList: Animal[];
    @Output() clickSender = new EventEmitter();

    editButtonHasBeenClicked(animalToEdit: Animal){
        this.clickSender.emit(animalToEdit);
    }
}