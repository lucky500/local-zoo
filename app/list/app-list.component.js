"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("../animal.model");
var AppListComponent = (function () {
    function AppListComponent() {
        this.animals = [
            new animal_model_1.Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "../resources/images/arctic_fox.jpg"),
            new animal_model_1.Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based", "../resources/images/ocelot.jpg"),
            new animal_model_1.Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises", "../resources/images/deer.jpg")
        ];
    }
    return AppListComponent;
}());
AppListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        moduleId: module.id,
        templateUrl: 'app-list.component.html'
    })
], AppListComponent);
exports.AppListComponent = AppListComponent;
//# sourceMappingURL=app-list.component.js.map