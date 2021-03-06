import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Animal } from '../animal.model';

@Component({
    selector: 'app-edit',
    moduleId: module.id,
    templateUrl: 'app-edit.component.html'
})

export class AppEditComponent{
    @Input() childSelectedAnimal: Animal;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked(){
        this.doneButtonClickedSender.emit();
    }

}