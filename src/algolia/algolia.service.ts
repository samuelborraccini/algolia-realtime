import { Injectable } from '@nestjs/common';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';
import { AlgoliaResponse, movie } from './alogliaTypes';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AlgoliaService {
  private client: SearchClient;
  private index: SearchIndex;

  constructor(private configService: ConfigService) {
    this.client = algoliasearch(
      this.configService.get<string>('ALGOLIA_APP_ID'),
      this.configService.get<string>('ALGOLIA_KEY'),
    );
    this.index = this.client.initIndex(
      this.configService.get<string>('ALGOLIA_INDEX'),
    );
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
