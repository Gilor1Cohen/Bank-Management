import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddResponse,
  Transaction,
  TransactionForm,
} from '../Models/Accound.Model';

@Injectable({
  providedIn: 'root',
})
export class AccountOperationsService {
  constructor(private http: HttpClient) {}

  onGet(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `http://localhost:4201/AccountOperations/GetData/${accountNumber}`
    );
  }

  onAdd(data: TransactionForm): Observable<AddResponse> {
    return this.http.post<AddResponse>(
      'http://localhost:4201/AccountOperations/AddData',
      data
    );
  }
}
