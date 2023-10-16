import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MagniUni.UI';
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    })
    console.log('students =>', this.students);
  }
}
