"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobFormComponent = void 0;
var core_1 = require("@angular/core");
var JobFormComponent = /** @class */ (function () {
    function JobFormComponent(jobService) {
        this.jobService = jobService;
        this.newJob = { title: '', company: '' };
    }
    JobFormComponent.prototype.addJob = function () {
        if (this.newJob.title && this.newJob.company) {
            this.jobService.addJob({ title: this.newJob.title, company: this.newJob.company });
            this.newJob = { title: '', company: '' };
        }
    };
    JobFormComponent = __decorate([
        core_1.Component({
            selector: 'app-job-form',
            templateUrl: './job-form.component.html',
            styleUrls: ['./job-form.component.css']
        })
    ], JobFormComponent);
    return JobFormComponent;
}());
exports.JobFormComponent = JobFormComponent;
