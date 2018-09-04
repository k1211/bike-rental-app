import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "./task";


const TASK_URL = 'http://127.0.0.1:8000/api/task/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Object> {
    return this.http.get(TASK_URL);
  }

  updateTask(): void {
    // return this.http.put('http://127.0.0.1:8000/api/task/');
  }

  createTask(task: Task): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // 'Authorization': 'my-auth-token'
    return this.http.post(TASK_URL, task, httpOptions);
  }

}
