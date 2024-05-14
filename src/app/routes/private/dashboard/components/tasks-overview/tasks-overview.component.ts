import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-overview',
  templateUrl: './tasks-overview.component.html',
  styleUrls: ['./tasks-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TasksOverviewComponent implements OnInit {
  tasks!: any[];
  ngOnInit(): void {
    this.tasks = [
      {
        title: 'Send Message to GINO',
        subTitle: '1 day left',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      },
      {
        title: 'Send MAIL to Rocco',
        subTitle: '2 day left',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      },
      {
        title: 'Add Prime Video to Android Phone',
        subTitle: '3 day left',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      },
    ];
  }
}
