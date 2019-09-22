import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  taskList: any
  

  constructor(public taskService: TaskService,private router: Router) {
    this.taskList = this.taskService.taskList;
  }

  ngOnInit() {
  }

  deleteTask(inx) {
    this.taskService.deleteTask(inx)
  }
  editTask(inx) {
    this.taskService.editTask(inx);
    this.router.navigate(['/add-task']);

  }

}
