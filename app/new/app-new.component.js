"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("../animal.model");
var AppNewComponent = (function () {
    function AppNewComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    AppNewComponent.prototype.submitForm = function (species, name, age, diet, location, caretakers, gender, likes, dislikes, img) {
        var newAnimalToAdd = new animal_model_1.Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes, img);
        this.newAnimalSender.emit(newAnimalToAdd);
    };
    return AppNewComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppNewComponent.prototype, "newAnimalSender", void 0);
AppNewComponent = __decorate([
    core_1.Component({
        selector: 'app-new',
        moduleId: module.id,
        templateUrl: 'app-new.component.html'
    })
], AppNewComponent);
exports.AppNewComponent = AppNewComponent;
//# sourceMappingURL=app-new.component.js.map