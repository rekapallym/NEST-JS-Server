

export interface TransactionRequest {
    transLogRowId: string;
  }
  
  
 export  interface TransResponse {
    data: Data;
  }
  interface Data{
    value: string;
    timestamp: string;
  }