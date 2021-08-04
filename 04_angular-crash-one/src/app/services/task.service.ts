import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';


//Whenever i make a Post or Put request i send headers alongside my  Request
const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);

    //The get request above will give me an array of tasks
  }

  //I cannot  return a observable directly that is why i must have of
  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }

  deleteTasks(task:Task):Observable<Task>{
    
    const url =`${this.apiUrl}/${task.id}`

    return this.http.delete<Task>(url)

  }

  updateTaskReminder(task:Task):Observable<Task>{

    const url=`${this.apiUrl}/${task.id}`

    return this.http.put<Task>(url,task,httpOptions)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);

  }
}
