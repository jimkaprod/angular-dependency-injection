import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { CoursesUseClassService } from '../services/courses-use-class.service';

export const COURSES_USE_CLASS_SERVICE_TOKEN =
  new InjectionToken<CoursesUseClassService>('COURSES_USE_CLASS_SERVICE_TOKEN');

export function coursesUseClassServiceProviderFactory(
  http: HttpClient
): CoursesUseClassService {
  return new CoursesUseClassService(http);
}
