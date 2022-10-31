import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
}
