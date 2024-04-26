import { Injectable } from '@nestjs/common';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';
import { AlgoliaResponse, movie } from './alogliaTypes';

@Injectable()
export class AlgoliaService {
  private client: SearchClient;
  private index: SearchIndex;

  constructor() {
    this.client = algoliasearch(
      'W4XQ425LBQ',
      'eed091e93b838e868a519f49e0fe8772',
    );
    this.index = this.client.initIndex('myfirstindex');
  }

  async search(query: string): Promise<any> {
    return this.index.search(query);
  }
  async search2(query: string): Promise<AlgoliaResponse<movie>> {
    return this.index.search(query, {
      restrictSearchableAttributes: ['original_title'],
    });
  }
}
