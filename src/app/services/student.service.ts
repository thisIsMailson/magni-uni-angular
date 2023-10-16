import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url = "Student"
  constructor(private http: HttpClient) {}

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiBaseUrl}/${this.url}`);
  }
}
