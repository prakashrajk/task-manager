import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  taskForm = new FormGroup({
    task: new FormControl(this.taskService.task)
  })

  isEdit = this.taskService.taskInx == null


  addTask() {
    let task = this.taskForm.value.task;
    this.taskService.addTask(task);
    this.taskForm.reset();
    alert('Task Added') 
  }

  updateTask() {
    let task = this.taskForm.value.task;
    this.taskService.updateTask(task,this.taskService.taskInx);
    this.taskForm.reset();
    alert('Task updated') 
  }

  ngOnInit() {
  }
}
