import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent {
  newJob = { title: '', company: '' };

  constructor(private jobService: JobService) {}

  addJob() {
    if (this.newJob.title && this.newJob.company) {
      this.jobService.addJob({ title: this.newJob.title, company: this.newJob.company });
      this.newJob = { title: '', company: '' };
    }
  }
}
