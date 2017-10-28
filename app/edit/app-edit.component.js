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
var AppEditComponent = (function () {
    function AppEditComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter();
    }
    AppEditComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    return AppEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], AppEditComponent.prototype, "childSelectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppEditComponent.prototype, "doneButtonClickedSender", void 0);
AppEditComponent = __decorate([
    core_1.Component({
        selector: 'app-edit',
        moduleId: module.id,
        templateUrl: 'app-edit.component.html'
    })
], AppEditComponent);
exports.AppEditComponent = AppEditComponent;
//# sourceMappingURL=app-edit.component.js.map