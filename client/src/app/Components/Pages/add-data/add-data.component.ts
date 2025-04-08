import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountOperationsService } from '../../../Services/account-operations.service';
import { CommonModule } from '@angular/common';
import { AddResponse } from '../../../Models/Accound.Model';

@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  Loading: boolean = false;
  Error: string | null = null;
  Form!: FormGroup;

  constructor(private fb: FormBuilder, private ao: AccountOperationsService) {}

  ngOnInit(): void {
    this.onSetForm();
  }

  onSetForm(): void {
    this.Form = this.fb.group({
      accountNumber: ['', [Validators.required]],
      actionType: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      interestRate: [''],
      installments: [''],
    });

    this.Form.get('actionType')?.valueChanges.subscribe((action) => {
      if (action === 'loan') {
        this.Form.get('interestRate')?.setValidators([
          Validators.required,
          Validators.min(0),
        ]);
        this.Form.get('installments')?.setValidators([
          Validators.required,
          Validators.min(1),
        ]);
      } else {
        this.Form.get('interestRate')?.clearValidators();
        this.Form.get('installments')?.clearValidators();
        this.Form.get('interestRate')?.setValue('');
        this.Form.get('installments')?.setValue('');
      }
      this.Form.get('interestRate')?.updateValueAndValidity();
      this.Form.get('installments')?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    console.log(this.Form.value);

    this.Loading = true;

    this.ao.onAdd(this.Form.value).subscribe({
      next: (data: AddResponse) => {
        alert(data.message);
        this.Loading = false;
      },
      error: (error: any) => {
        this.Error = error.error.message;
        this.Loading = false;
      },
    });
  }
}
