import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  constructor(private jobService: JobService) {}

  get jobs() {
    return this.jobService.getJobs();
  }
}
