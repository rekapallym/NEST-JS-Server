export interface ITransactionRequest {
  transLogRowId: string;
}
export interface ITransResponse {
  data: Array <IData>;
}
interface IData {
  value: string;
  timestamp: string;
}