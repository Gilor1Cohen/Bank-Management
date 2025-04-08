export interface Transaction {
  id: number;
  accountNumber: string;
  type: 'deposit' | 'withdrawal' | 'loan';
  amount: string;
  date: string;
  interestRate?: number | null;
  payments?: number | null;
}

export interface TransactionForm {
  accountNumber: string;
  actionType: 'withdrawal' | 'deposit' | 'transfer';
  amount: number;
  interestRate?: string;
  installments?: string;
}

interface Result {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
}

export interface AddResponse {
  message: string;
  result: Result;
}
