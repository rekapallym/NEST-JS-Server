import { Controller, Logger } from '@nestjs/common';
import { TransLogService } from './translog.service';
import { GrpcMethod } from '@nestjs/microservices';
import {ITransactionRequest, ITransResponse } from './model';
// import { BigtableService } from './bigtable/bigtable.service';


@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private transLog : TransLogService ) {}

  @GrpcMethod('AppController', 'GetTransactionByRowId')


  getTransactionByRowId(transcationrequest: ITransactionRequest): ITransResponse {
    this.logger.log('Adding ' + transcationrequest.transLogRowId);
    // let transres = this.transLog.getTransactionByRowId(transcationrequest);
    return this.transLog.getTransactionByRowId(transcationrequest).then(trans => {
      return trans;
    });
  }
//gettranslogbyrowid(rowid) => will call bigtable
}
