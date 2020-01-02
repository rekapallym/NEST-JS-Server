

export interface ITransactionRequest {
  transLogRowId: string;
}

 export interface ITransResponse {
  data: IData;
}
interface IData{
  value: string;
  timestamp: string;
}