import { Injectable, Logger } from "@nestjs/common";
// import { Bigtable} from '@google-cloud/bigtable';
const Bigtable = require('@google-cloud/bigtable');


@Injectable()
export class BigtableService {

    bigtable = Bigtable();
    public async  quickstart() {
        const instance = this.bigtable.instance('kl-bt-key-dev-npe');

        const table = instance.table('EDataTable');

        const [allRows] = await table.getRows({});

        console.log('count of rows in bigtable', allRows.length);

        allRows.forEach(element => {
          console.log(element.data.EntityData);
        });
      }

}


