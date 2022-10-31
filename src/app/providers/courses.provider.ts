import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { CoursesService } from '../services/courses.service';

export const COURSES_SERVICE_TOKEN = new InjectionToken<CoursesService>(
  'COURSES_SERVICE_TOKEN'
);

function coursesServiceProviderFactory(http: HttpClient): CoursesService {
  return new CoursesService(http);
}
