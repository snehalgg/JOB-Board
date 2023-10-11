"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobListComponent = void 0;
var core_1 = require("@angular/core");
var JobListComponent = /** @class */ (function () {
    function JobListComponent(jobService) {
        this.jobService = jobService;
    }
    Object.defineProperty(JobListComponent.prototype, "jobs", {
        get: function () {
            return this.jobService.getJobs();
        },
        enumerable: false,
        configurable: true
    });
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'app-job-list',
            templateUrl: './job-list.component.html',
            styleUrls: ['./job-list.component.css']
        })
    ], JobListComponent);
    return JobListComponent;
}());
exports.JobListComponent = JobListComponent;
