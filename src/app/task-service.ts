import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  taskList = ['Change font Size.']
  task = ''
  taskInx = null

  addTask(task) {
    if(task != "") {
      this.taskList.push(task)
    }
  }

  updateTask(task,inx) {
    if(task != "") {
      this.taskList[inx] = task;
      this.taskInx = null;
      this.task = ""
      
    }
  }

  deleteTask(inx) {
    this.taskList.splice(inx,1);
  }

  editTask(inx) {
    this.task = this.taskList[inx];
    this.taskInx = inx;
  }

}
