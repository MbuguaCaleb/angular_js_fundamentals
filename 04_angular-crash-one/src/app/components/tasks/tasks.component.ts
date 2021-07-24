import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //When passing something into my class i instantiate it from my consturctor*/
  //Since i am bringing my service in i must instantitate from my constructor*/
  constructor(private taskService: TaskService) {}

  //i am decalaring a porperty task of the type task..but now an array
  //No wonder i am assigning the tasks i have brought in
  tasks: Task[] = [];

  //the first method that runs runs when a component has been rendered
  //this of subscribe as a promise
  //the Observable is promising me that is going to give me taks
  //When i use subsribe it keeps me up to date incase there is any change of state
  //And when i subsribe i am expecting a promise of TASKS
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
