import { Component, OnInit, Input} from '@angular/core';
import { ProjectService }  from '../../project.service';
import { Project }         from '../../project';

@Component({
  selector: 'app-project-partial',
  templateUrl: './project-partial.component.html',
  styleUrls: ['./project-partial.component.css']
})
export class ProjectPartialComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects()
  }

  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}
