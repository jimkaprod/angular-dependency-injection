import { Component, Inject, OnInit } from '@angular/core';
import { COURSES_USE_CLASS_SERVICE_TOKEN } from '../../providers/courses-use-class.provider';
import { CoursesUseClassService } from '../../services/courses-use-class.service';

@Component({
  selector: 'app-course-card-use-class',
  templateUrl: './course-card-use-class.component.html',
  styleUrls: ['./course-card-use-class.component.css'],
})
export class CourseCardUseClassComponent implements OnInit {
  constructor(
    @Inject(COURSES_USE_CLASS_SERVICE_TOKEN)
    private coursesUseClassService: CoursesUseClassService
  ) {}

  ngOnInit() {
    console.log(
      'CourseUseClassCardComponent>>>>',
      this.coursesUseClassService.getData()
    );
  }
}
