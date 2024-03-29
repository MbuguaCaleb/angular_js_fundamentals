import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  
  @Output() onAddTask:EventEmitter<Task> =  new EventEmitter();

  text:string;
  day:string;
  reminder:boolean =false;


  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task')
      return
    }
    if(!this.day){
      alert('Please add a day')
      return
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    //emit event

    this.onAddTask.emit(newTask)

    //clear the form after submit
    this.text='';
    this.day='';
    this.reminder=false
  }

}
