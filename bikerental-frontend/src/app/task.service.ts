import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "./task";


const TASKS_URL = 'http://127.0.0.1:8000/api/task/';
const TASK_URL = 'http://127.0.0.1:8000/api/task/?id=';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Object> {
    return this.http.get(TASKS_URL);
  }

  getTasksByID(taskId): Observable<Object> {
    return this.http.get(TASK_URL + taskId);
  }

  updateTask(): void {
    // return this.http.put('http://127.0.0.1:8000/api/task/');
  }

  createTask(task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // 'Authorization': 'my-auth-token'
    return this.http.post(TASKS_URL, task, httpOptions);
  }

}
