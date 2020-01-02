import { Injectable } from '@nestjs/common';
import {ITransactionRequest, ITransResponse } from './model';

const Bigtable = require('@google-cloud/bigtable');


@Injectable()
export class TransLogService {
    bigtable = Bigtable();
    public async getTransactionByRowId(transLogReq: ITransactionRequest): Promise<ITransResponse> {

        const instance = this.bigtable.instance('kl-bt-key-dev-npe');

        const table = instance.table('EDataTable');

        const [allRows] = await table.getRows({});

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
