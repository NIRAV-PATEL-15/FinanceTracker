import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.scss'],
})
export class IncomeExpenseComponent implements OnInit {
  labels: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  ngOnInit(): void {
    this.createPieChart();
  }
  createPieChart() {
    const ctx = document.getElementById('acc-bal-chart') as HTMLCanvasElement;
    const ctx2 = document.getElementById('IEChart') as HTMLCanvasElement;
    const myPieChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Income Chart',
            data: [65, 59, 80, 81, 56, 55, 40, 58, 34, 78, 69, 88],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'center',
            display: false,
          },
        },
      },
    });
    const myPieChart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Income',
            data: [
              12796, 13096, 7137, 14278, 14894, 5015, 11949, 9532, 7870, 12935,
              9028, 14440,
            ],
            borderColor: 'rgb(255,255,255)',
            backgroundColor: 'rgb(161, 110, 229)',
            borderWidth: 2,
            borderRadius: 2,
            borderSkipped: false,
          },
          {
            label: 'Expense',
            data: [
              9414, 5736, 5280, 9231, 8184, 7337, 3125, 7832, 4642, 8418, 3697,
              6512,
            ],
            borderColor: 'rgb(255,255,255)',
            backgroundColor: 'rgb(68, 114, 196)',
            borderWidth: 2,
            borderRadius: 2,
            borderSkipped: false,
          },
        ],
      },
    });
  }
}
