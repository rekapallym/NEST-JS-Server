import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { BigtableService } from './bigtable/bigtable.service';
import { TransLogService } from './translog.service';
// import { BigtableController } from './bigtable.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TransLogService],
})
export class AppModule {}
