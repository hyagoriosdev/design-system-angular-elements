import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ds-progress-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <mat-progress-spinner [mode]="mode()" [value]="value()" [color]="color()" [diameter]="diameter()"></mat-progress-spinner>
  `,
  styles: [`
    :host { display: inline-block; }
  `]
})
export class DsProgressSpinnerComponent {
  mode = input<'determinate' | 'indeterminate'>('indeterminate');
  value = input<number>(50);
  color = input<string>('primary');
  diameter = input<number>(40);
}
