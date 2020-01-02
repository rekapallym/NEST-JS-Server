import { Controller, Logger } from '@nestjs/common';
import { TransLogService } from './translog.service';
import { GrpcMethod } from '@nestjs/microservices';
import { BigtableService } from './bigtable/bigtable.service';


interface TransactionRequest {
  transLogRowId: string;
}


interface TransResponse {
  data: Data;
}
interface Data{
  value: string;
  timestamp: string;
}

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private bigtable: BigtableService) {}

  @GrpcMethod('AppController', 'Accumulate')


  getTransactionByRowId(transcationrequest: TransactionRequest) {
    this.logger.log('Adding ' + transcationrequest.transLogRowId);
    this.bigtable.quickstart();
    return {Trans: transcationrequest.transLogRowId};
  }
//gettranslogbyrowid(rowid) => will call bigtable
}
