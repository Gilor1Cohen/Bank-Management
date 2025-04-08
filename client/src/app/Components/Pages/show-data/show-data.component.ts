import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountOperationsService } from '../../../Services/account-operations.service';
import { Transaction } from '../../../Models/Accound.Model';

@Component({
  selector: 'app-show-data',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent implements OnInit {
  Form: FormGroup | null = null;
  Loading: boolean = false;
  Error: string | null = null;
  Data: Transaction[] | null = null;

  constructor(private fb: FormBuilder, private ao: AccountOperationsService) {}

  ngOnInit(): void {
    this.onSetForm();
  }

  onSetForm(): void {
    this.Form = this.fb.group({ AccountNumber: ['', [Validators.required]] });
  }

  onSubmit(): void {
    this.Loading = true;
    this.Error = null;
    this.Data = null;

    const accountNumber = this.Form?.value.AccountNumber;

    this.ao.onGet(accountNumber).subscribe({
      next: (data: Transaction[]) => {
        this.Data = data;
        this.Loading = false;
      },
      error: (error) => {
        this.Error = error.error.message;
        this.Loading = false;
      },
    });
  }
}
