import { Component, Inject, OnInit } from '@angular/core';
import { COURSES_SERVICE_TOKEN } from '../../providers/courses.provider';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(
    @Inject(COURSES_SERVICE_TOKEN) private coursesService: CoursesService
  ) {}

  ngOnInit() {
    console.log('CourseCardComponent>>>>', this.coursesService.getData());
  }
}
