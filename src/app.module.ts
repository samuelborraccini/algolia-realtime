import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgoliaService } from './algolia/algolia.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AlgoliaService],
})
export class AppModule {}
