import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './projects-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // getProject(id: string): Observable<Project> {
  //   // TODO: send the message _after_ fetching the project
  //   this.messageService.add(`ProjectService: fetched project id=${id}`);
  //   return of(PROJECTS.find(project => project.id === id));
  // }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: string): Observable<Project> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

  constructor() { }
}
