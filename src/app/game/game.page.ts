import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonButton, IonSpinner, IonIcon } from '@ionic/angular/standalone';
import { NgIf, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TriviaService, Question } from '../services/trivia.service';
import { RankingService } from '../services/ranking.service';
import { refreshCircle, trophy, arrowForwardCircle, helpOutline, cube, checkmarkCircle, closeCircle, helpCircle, gameController } from 'ionicons/icons';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonButton, IonSpinner, NgIf, NgForOf, RouterLink, IonIcon]
})
export class GamePage {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  isCorrect = false;
  gameOver = false;
  totalQuestions = 0;
  loading = true;
  error = '';
  selectedChoice: string | null = null;
  categoryName = '';

  constructor(
    private route: ActivatedRoute,
    private triviaService: TriviaService,
    private rankingService: RankingService,
  ) {

    addIcons({ refreshCircle, trophy, arrowForwardCircle, helpOutline, cube, checkmarkCircle, closeCircle, helpCircle, gameController })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const categoryId = +params['categoryId'] || 0;
      this.categoryName = params['categoryName'] || '';
      this.triviaService.getQuestions(categoryId).subscribe({
        next: qs => {
          this.questions = qs;
          this.totalQuestions = qs.length;
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load questions';
          this.loading = false;
        }
      });
    });
  }

  get question(): Question | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  selectAnswer(choice: string) {
    if (this.answered || this.gameOver) {
      return;
    }
    this.answered = true;
    this.selectedChoice = choice;
    this.isCorrect = choice === this.question?.answer;
    if (this.isCorrect) {
      this.score++;
    }
  }

  getChoiceColor(choice: string): string {
    if (!this.answered) {
      return 'primary';
    }
    if (choice === this.question?.answer) {
      return 'success';
    }
    if (choice === this.selectedChoice && !this.isCorrect) {
      return 'danger';
    }
    return 'medium';
  }

  nextQuestion() {
    this.answered = false;
    this.selectedChoice = null;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.gameOver = true;
      this.recordResult();
    }
  }

  restartGame() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answered = false;
    this.isCorrect = false;
    this.gameOver = false;
    this.selectedChoice = null;
    this.loading = true;
    this.error = '';
  }

  private recordResult() {
    const record = {
      date: new Date().toLocaleString(),
      category: this.categoryName,
      score: this.score,
      total: this.totalQuestions
    };
    this.rankingService.addRecord(record);
  }
}
