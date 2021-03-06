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
var AppListComponent = (function () {
    function AppListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.deleteSender = new core_1.EventEmitter();
        this.filterByAge = "allAnimals";
    }
    AppListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByAge = optionFromMenu;
    };
    AppListComponent.prototype.editButtonHasBeenClicked = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    AppListComponent.prototype.deleteButtonHasBeenClicked = function (animalToDelete) {
        this.deleteSender.emit(animalToDelete);
    };
    return AppListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppListComponent.prototype, "clickSender", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppListComponent.prototype, "deleteSender", void 0);
AppListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        moduleId: module.id,
        templateUrl: 'app-list.component.html'
    })
], AppListComponent);
exports.AppListComponent = AppListComponent;
//# sourceMappingURL=app-list.component.js.map