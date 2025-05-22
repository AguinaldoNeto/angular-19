import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { SaleListComponent } from './sale-list/sale-list.component';

@Component({
  selector: 'app-root',
  imports: [SaleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Basic Concepts';
}
