import { Component, type OnInit } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,  IonButton, IonSpinner, IonIcon, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from "ionicons";
import { RankingService, RankingRecord } from '../services/ranking.service';
import { trophy, alertCircle, medal, star } from 'ionicons/icons';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,  IonButton, IonSpinner, NgIf, NgForOf, RouterLink, IonIcon, IonAvatar, IonLabel]
})
export class RankingPage implements OnInit {
  records: RankingRecord[] = [];
  loading = true;
  error = '';

  constructor(private rankingService: RankingService) {
    addIcons({ trophy, alertCircle, medal, star })
  }

  async ngOnInit() {
    try {
      this.records = await this.rankingService.getRecords();
    } catch {
      this.error = 'Failed to load ranking records';
    } finally {
      this.loading = false;
    }
  }
}
