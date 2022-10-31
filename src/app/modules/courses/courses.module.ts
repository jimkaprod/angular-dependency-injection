import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  coursesServiceProviderFactory,
  COURSES_SERVICE_TOKEN,
} from './providers/courses.provider';
import { HttpClient } from '@angular/common/http';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [CourseCardComponent],
  declarations: [CourseCardComponent],
  providers: [
    {
      provide: COURSES_SERVICE_TOKEN,
      useFactory: coursesServiceProviderFactory,
      deps: [HttpClient],
    },
  ],
})
export class CoursesModule {}
