import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  _id: string;
  name: string;
  count: number;
}


@Injectable({ providedIn: 'root' })
export class SkillsService {
  private apiUrl = 'http://localhost:5000/api/skills';
  constructor(private http: HttpClient) {}
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }
}
