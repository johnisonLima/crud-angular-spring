import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/couses.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.API)
  }
}
