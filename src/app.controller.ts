import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AlgoliaService } from './algolia/algolia.service';
import { movie } from './algolia/alogliaTypes';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly algoliaService: AlgoliaService,
  ) {}

  @Get('two/:term')
  async searchTerm2(@Param('term') term: string): Promise<movie[]> {
    const res = await this.algoliaService.search2(term);
    const { hits } = res;
    return hits;
  }
  @Get(':term')
  searchTerm(@Param('term') term: string): any {
    return this.algoliaService.search(term);
  }
}
