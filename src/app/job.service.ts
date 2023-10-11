import { Injectable } from '@angular/core';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [];

  getJobs(): Job[] {
    return this.jobs;
  }

  addJob(job: Job) {
    this.jobs.push(job);
  }
}
