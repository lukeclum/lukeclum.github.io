import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project }         from '../../project';
import { ProjectService }  from '../../project.service';

@Component({
  selector: 'app-project-details',
  // templateUrl: './project-details.component.html',
  templateURL: '<div [innerHtml]="safeHtmlContent | safehtml"></div>',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    this.safeHtmlContent  = './project-details.component.html'
  ) {}

  ngOnInit(): void {
    this.getProject();


  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

}
