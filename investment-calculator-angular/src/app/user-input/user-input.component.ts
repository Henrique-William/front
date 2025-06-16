import {Component, output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
   calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInterestRate = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInterestRate(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    this.enteredInitialInvestment.set('0');
  }
}
