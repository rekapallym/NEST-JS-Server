import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { BigtableService } from './bigtable/bigtable.service';
// import { BigtableController } from './bigtable.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BigtableService],
})
export class AppModule {}
