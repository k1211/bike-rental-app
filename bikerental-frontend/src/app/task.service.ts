import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const TASKS_URL = 'http://127.0.0.1:8000/api/task/';
const TASK_URL = 'http://127.0.0.1:8000/api/task/?id=';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<any> {
    return this.http.get(TASKS_URL);
  }

  getTaskByID(taskId): Observable<any> {
    return this.http.get(TASK_URL + taskId);
  }

  updateTask(updatedParams): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(TASKS_URL, updatedParams, httpOptions);
  }

  createTask(task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(TASKS_URL, task, httpOptions);
  }
}
