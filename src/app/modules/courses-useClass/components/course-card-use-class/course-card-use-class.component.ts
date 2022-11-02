import { Component, Inject, OnInit } from '@angular/core';
import { COURSES_USE_CLASS_SERVICE_TOKEN } from 'src/app/modules/courses-useClass/providers/courses-use-class.provider';
import { CoursesUseClassService } from 'src/app/modules/courses-useClass/services/courses-use-class.service';

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
      'CourseCardComponent>>>>',
      this.coursesUseClassService.getData()
    );
  }
}
