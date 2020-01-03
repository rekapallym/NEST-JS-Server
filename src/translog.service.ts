// to push all the data
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
        // console.log(allRows)
        let transResponse = {data: []};
        allRows.forEach(element => {
           transResponse.data.push({
              value: element.data.EntityData.Data[0].value,
              timestamp:  element.data.EntityData.Data[0].timestamp,
          });
          console.log(transResponse);
        // console.log(element.data.EntityData.Data[0]);
        });
        return transResponse;
    }
}

