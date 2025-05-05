import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Question {
  category: string;
  text: string;
  choices: string[];
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private readonly API_URL = 'https://opentdb.com';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<{ trivia_categories: Array<{ id: number; name: string }> }>(
        `${this.API_URL}/api_category.php`
      )
      .pipe(map(res => res.trivia_categories));
  }

  getQuestions(categoryId: number, amount: number = 10): Observable<Question[]> {
    return this.http
      .get<{ results: ApiQuestion[] }>(
        `${this.API_URL}/api.php?amount=${amount}&category=${categoryId}`
      )
      .pipe(
        map(res =>
          res.results.map(item => {
            const decodedQuestion = this.decodeHtml(item.question);
            const decodedCorrect = this.decodeHtml(item.correct_answer);
            const decodedIncorrect = item.incorrect_answers.map(ans => this.decodeHtml(ans));
            const choices = this.shuffle([...decodedIncorrect, decodedCorrect]);
            return {
              category: item.category,
              text: decodedQuestion,
              choices,
              answer: decodedCorrect
            };
          })
        )
      );
  }

  private decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  private shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
