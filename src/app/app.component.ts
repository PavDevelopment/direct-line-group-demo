import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  baseURL: string = 'http://localhost:3000/';
  collapsing = true;
  faqs: Array<IFaq> = [];

  constructor(private http: HttpClient) {
    this.getFaqs().subscribe((data) => {
      console.log('data', data);
      this.faqs = data;
    });
  }

  getFaqs(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>(this.baseURL + 'faq');
  }
}
