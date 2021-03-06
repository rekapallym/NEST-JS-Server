import { Controller, Logger } from '@nestjs/common';
import { TransLogService } from './translog.service';
import { GrpcMethod } from '@nestjs/microservices';
import {ITransactionRequest, ITransResponse } from './model';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the transLog service
  constructor(private transLog: TransLogService ) {}

  @GrpcMethod('AppController', 'GetTransactionByRowId')
  async getTransactionByRowId(transcationrequest: ITransactionRequest) {
    this.logger.log('the qurey param is ' + transcationrequest.transLogRowId);
    // let transres = this.transLog.getTransactionByRowId(transcationrequest);
    return this.transLog.getTransactionByRowId(transcationrequest);
  }
}
