import { Component, type OnInit } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonText, IonRippleEffect, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import type { TriviaService } from '../services/trivia.service';
import type { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonText, NgIf, NgForOf, RouterLink, IonRippleEffect, IonIcon, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid]
})
export class CategoryPage implements OnInit {
  categories: { id: number; name: string }[] = [];
  loading = true;
  error = '';

  constructor(private triviaService: TriviaService, private router: Router) { }

  ngOnInit() {
    this.triviaService.getCategories().subscribe({
      next: cats => {
        this.categories = cats;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load categories';
        this.loading = false;
      }
    });
  }

  selectCategory(cat: { id: number; name: string }) {
    this.router.navigate(['/game'], { queryParams: { categoryId: cat.id, categoryName: cat.name } });
  }
}
