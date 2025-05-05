import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface RankingRecord {
  date: string;
  category: string;
  score: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private _storage: Storage | null = null;
  private readonly STORAGE_KEY = 'ranking';

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    const store = await this.storage.create();
    this._storage = store;
  }

  async addRecord(record: RankingRecord): Promise<void> {
    const recs: RankingRecord[] = (await this._storage?.get(this.STORAGE_KEY)) || [];
    recs.push(record);
    await this._storage?.set(this.STORAGE_KEY, recs);
  }

  async getRecords(): Promise<RankingRecord[]> {
    return (await this._storage?.get(this.STORAGE_KEY)) || [];
  }

  async clearRecords(): Promise<void> {
    await this._storage?.set(this.STORAGE_KEY, []);
  }
}
