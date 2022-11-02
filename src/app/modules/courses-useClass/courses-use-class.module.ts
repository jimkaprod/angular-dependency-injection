import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  coursesUseClassServiceProviderFactory,
  COURSES_USE_CLASS_SERVICE_TOKEN,
} from './providers/courses-use-class.provider';
import { HttpClient } from '@angular/common/http';
import { CourseCardUseClassComponent } from './components/course-card-use-class/course-card-use-class.component';

@NgModule({
  imports: [CommonModule],
  exports: [CourseCardUseClassComponent],
  declarations: [CourseCardUseClassComponent],
  providers: [
    {
      provide: COURSES_USE_CLASS_SERVICE_TOKEN,
      useFactory: coursesUseClassServiceProviderFactory,
      deps: [HttpClient],
    },
  ],
})
export class CoursesUseClassModule {}
