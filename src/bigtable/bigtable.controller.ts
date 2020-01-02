// import { Controller, Logger } from '@nestjs/common';
// import { MathService } from './math.service';
// import { GrpcMethod } from '@nestjs/microservices';
// import { BigtableService } from './bigtable.service';
// import { Observable } from 'rxjs';

// // interface INumberArray{
// //   data: number[];
// // }
// // interface INumberArray:{
// //     data ;
// //   }

// @Controller()
// export class BigtableController {
//   // Create a logger instance
// //   private logger = new Logger('AppController');

//   // Inject the math service
//   constructor( private bigtable: BigtableService) {}

//   @GrpcMethod('BigtableController', 'getData')

//  getData() {
//     // this.bigtable.quickstart();
//     return  this.bigtable.quickstart();
//  }

// //   accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
// //     this.logger.log('Adding ' + numberArray.data.toString());
// //     this.bigtable.quickstart();
// //     return {sum: this.mathService.accumulate(numberArray.data)};
// //   }


// }
