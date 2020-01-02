import { Injectable } from '@nestjs/common';
import {ITransactionRequest, ITransResponse } from './model';

const Bigtable = require('@google-cloud/bigtable');


@Injectable()
export class TransLogService {
     bigtable = Bigtable();
     instance: any;
     table: any;


    constructor() {
        this.instance = this.bigtable.instance('kl-bt-key-dev-npe');
        this.table = this.instance.table('EDataTable');
    }
   
    public async getTransactionByRowId(transLogReq: ITransactionRequest): Promise<ITransResponse> {

        // const [allRows] = await this.table.row(transLogReq.transLogRowId).get();
        const [allRows] = await this.table.getRows({});

        console.log('count of rows in bigtable', allRows.length);
    
        let transResponse;
        allRows.forEach(element => {
           transResponse = {
            data: {
              value: element.data.EntityData.Data[0].value,
              timestamp:  element.data.EntityData.Data[0].timestamp,
            },
          }
        //   console.log(transResponse);
        });
        return transResponse ;
        // return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
}
